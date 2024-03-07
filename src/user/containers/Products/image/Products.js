import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Product(props) {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("women's clothing");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductData(data);
  };

  const handleFilter = () => {
    let filteredData = productData.filter(
      (v) =>
        v.title.toLowerCase().includes(searchData) ||
        v.description.toLowerCase().includes(searchData) ||
        v.price.toString().includes(searchData)
    );

    if (category) {
      filteredData = filteredData.filter((v) => v.category === category);
    }

    if (sort) {
      filteredData.sort((a, b) => {
        if (sort === "hl") {
          return b.price - a.price;
        } else if (sort === "lh") {
          return a.price - b.price;
        } else if (sort === "az") {
          return a.title.localeCompare(b.title);
        } else if (sort === "za") {
          return b.title.localeCompare(a.title);
        }
      });
    }

    return filteredData;
  };

  const finalData = handleFilter();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <div className={style.Card}>
        <input
          className={style.inputsearch}
          type="text"
          placeholder="Search..."
          value={searchData}
          onChange={(event) => setSearchData(event.target.value)}
        ></input>
      </div>
      <div className={style.Sub_header}>
        <select
          onChange={(e) => setSort(e.target.value)}
          className={style.selectcard}
        >
          <option value="">--Select--</option>
          <option value="hl">High to Low</option>
          <option value="lh">Low to High</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
        </select>

        <div id="myDIV">
          <button
            style={{
              // border: "2px solid white",
              margin: "10px 10px",
              border: "none",
              outline: "none",
              padding: "10px 16px",
              backgroundColor: "#f1f1f1",
              cursor: "pointer;",
              borderRadius: '10px'
            }}
            className={"all"}
            onClick={() => handleCategoryChange()}
          >
            All
          </button>
          <button
         
            className={category === "men's clothing" ? "btn active" : "btn"}
            onClick={() => handleCategoryChange("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className={category === "women's clothing" ? "btn active" : "btn"}
            onClick={() => handleCategoryChange("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className={category === "electronics" ? "btn active" : "btn"}
            onClick={() => handleCategoryChange("electronics")}
          >
            Electronics
          </button>
          <button
            className={category === "jewelery" ? "btn active" : "btn"}
            onClick={() => handleCategoryChange("jewelery")}
          >
            Jewelry
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {finalData.map((v, i) => (
            <div className="col-md-4 gy-5" key={i}>
              <Card
                style={{
                  width: "25rem",
                  border: "none",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <img
                  alt="Sample"
                  style={{ height: "350px", marginBottom: "30px" }}
                  src={v.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {v.title.length > 20
                      ? v.title.substring(0, 20) + "..."
                      : v.title}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    ${v.price}
                  </CardSubtitle>
                  <CardText>
                    <h6 style={{ display: "inline-block" }}>Category : </h6>{" "}
                    {v.category}
                  </CardText>
                  <CardText>
                    {v.description.length > 50
                      ? v.description.substring(0, 100) + "..."
                      : v.description}
                  </CardText>
                  <Button
                    style={{
                      backgroundColor: "#232f3e",
                      marginTop: "10px",
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
