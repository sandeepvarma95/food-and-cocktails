import db from "./firebaseConfig.js";
import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Cocktail.css";

function Cocktail() {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("cocktailData")
      .orderBy("name")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  return (
    <div className="grid">
      {info &&
        info.map((foo) => {
          return (
            <div className="food_container">
              <div className="img_container">
                <img className="food_image" src={foo.img} alt="" />
              </div>
              <div className="data_container">
                <h1>{foo.name}</h1>
                <p>
                  {" "}
                  {foo.con1} <b>{foo.quan1}</b>{" "}
                </p>
                <p>
                  {" "}
                  {foo.con2} <b>{foo.quan2}</b>{" "}
                </p>
                <p>
                  {" "}
                  {foo.con3} <b>{foo.quan3}</b>{" "}
                </p>
                <p>
                  {" "}
                  {foo.con4} <b>{foo.quan4}</b>{" "}
                </p>
                <p>
                  {" "}
                  {foo.con5} <b>{foo.quan5}</b>{" "}
                </p>
                <p>
                  {" "}
                  {foo.con6} <b>{foo.quan6}</b>{" "}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cocktail;
