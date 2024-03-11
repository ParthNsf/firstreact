import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
// import Loader from "./Loader";

function Product(props) {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      let uniqueCategories = [...new Set(data.map(item => item.category))];
      
      setCategory(uniqueCategories);
      setProductData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Ensure loading state is set to false even in case of errors
    }
  };

  const handleFilter = () => {
    let filteredData = productData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchData) ||
        item.description.toLowerCase().includes(searchData) ||
        item.price.toString().includes(searchData)
    );

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

    if (selectedCategory) {
      filteredData = filteredData.filter((item) => item.category === selectedCategory);
    }

    return filteredData;
  };

  const finalData = handleFilter();

  return (
    <>
      {/* {loading ? <Loader /> : null} */}
      <div className={style.Card}>
        <input
          className={style.inputsearch}
          type="text"
          placeholder="Search..."
          value={searchData}
          onChange={(event) => setSearchData(event.target.value)}
        />
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
        <Button
          style={{backgroundColor: selectedCategory === '' ? 'red' : ''}}
          className={style.selectcard}
          onClick={() => setSelectedCategory('')}
        >
          All
        </Button>
        {category.map((cat, index) => (
          <Button
            key={cat}
            style={{backgroundColor: selectedCategory === cat ? 'red' : ''}}
            className={style.selectcard}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="container">
        <div className="row">
          {finalData.map((item) => (
            <div className="col-md-4 gy-5" key={item.id}>
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
                  src={item.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    ${item.price}
                  </CardSubtitle>
                  <CardText>
                    <h6 style={{ display: "inline-block" }}>Category : </h6>{" "}
                    {item.category}
                  </CardText>
                  <CardText>
                    {item.description.length > 50 ? `${item.description.substring(0, 100)}...` : item.description}
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