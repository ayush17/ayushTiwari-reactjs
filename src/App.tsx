import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [test, setTest] = useState("");
  async function getProducts() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5dXNodGl3YXJpMTcwMTE5OTVAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2F5dXNoMTciLCJpYXQiOjE2NjI0NTAyNzcsImV4cCI6MTY2Mjg4MjI3N30.-RWz-ne5Lx-cf_LfIg27qGSeDXiGZi63s4FGoD1XO44"
    );

    fetch("https://upayments-studycase-api.herokuapp.com/api/products", {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.products);
        setTest(result.products[0].avatar);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getProducts();
  }, []);
  console.log("this is test product", test);
  return (
    <div className="App">
      {/* This is the header */}
      <div
        className="header"
        style={{
          backgroundColor: "white",
          width: "80%",
          padding: "1vw",
          display: "flex",
          justifyContent: "space-between",
          border: "none",
          borderRadius: "10px",
          margin: "0 auto",
          marginTop: "20px",
          boxShadow: "5px 5px 5px #888888",
          fontWeight: "bold",
        }}
      >
        <span>
          <i>Upayments Store</i>
        </span>
        <span>
          <i>Register</i>
        </span>
      </div>
      {/* Header ends */}
      {/* Categories */}
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          padding: "1vw",
          display: "flex",
          justifyContent: "space-between",
          border: "none",
          borderRadius: "10px",
          margin: "0 auto",
          marginTop: "20px",
          boxShadow: "5px 5px 5px #888888",
          fontWeight: "bold",
        }}
      ></div>

      {/* Categories ends */}
      {/* Card starts here */}
      <div style={{ margin: "auto", width: "60%" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          {products && products.length
            ? products.map((product: any) => {
                return (
                  <div className="product">
                    {/* image */}
                    <div
                      className="image"
                      style={{
                        backgroundColor: "white",
                        padding: "3vw",
                        borderRadius: "10px",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        src={product ? product.avatar : null}
                        style={{ width: "100px" }}
                        alt=""
                      />
                    </div>

                    {/* content */}

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "25px",
                        marginLeft: "20px",
                        textAlign: "left",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      <span>{product && product.name}</span>
                      <span style={{ marginLeft: "20px" }}>
                        ${product && product.price}
                      </span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      {/* card ends here */}
    </div>
  );
}

export default App;
