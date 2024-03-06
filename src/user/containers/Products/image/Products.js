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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductData(data);
  };

  const search = () => {
    const searchQuery = document.getElementById("search").value.toLowerCase();

    if (searchQuery) {
      const filteredData = productData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
      );
      setProductData(filteredData);
    } else {
        setProductData(productData)
    }
  };        

  return (
    <>
      <div className={style.Card}>
        <input
          className={style.inputsearch}
          type="text"
          placeholder="Search..."
          id="search"
          onKeyUp={search}
        ></input>
      </div>
      <div className={style.Sub_header}></div>
      <div className="container">
        <div className="row">
          {productData.length > 0 ? (
            productData.map((v, i) => (
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
                    <CardTitle tag="h5">{v.title.substring(0, 8)}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      ${v.price}
                    </CardSubtitle>
                    <CardText>
                      <h6 style={{ display: "inline-block" }}>Category : </h6>{" "}
                      {v.category}
                    </CardText>
                    <CardText>{v.description.substring(0, 70)}</CardText>
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
            ))
          ) : (
            <div className="col-md-12">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
