import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Card from "../components/Card";
import slide0 from "../images/slide0.png";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";

export default function Home() {
  const [clothCat, setclothCat] = useState([]);
  const [clothItem, setclothItem] = useState([]);
  const [search, setsearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/clothesData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0],response[1]);
    setclothItem(response[0]);
    setclothCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div style={{ display: "flex" , justifyContent:"center"}}>
                <input
                  className="form-control mr-sm-2 search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{
                    setsearch(e.target.value)
                  }}
                />
                {/* <button
                  className="btn my-2 my-sm-0 text-white"
                  style={{ backgroundColor: "#9C0045" }}
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img className="d-block w-100 " src={slide0} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 " src={slide1} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 " src={slide2} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="container ">
        {clothCat !== []
          ? clothCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="h5 m-3 category">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {clothItem !== [] ? (
                    clothItem
                      .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                            clothItem={filterItems}
                              options={filterItems.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
