import db from "./firebaseConfig.js";
import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Food.css";

function Food() {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("foodData")
      .orderBy("foodName")
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
                <h1>{foo.foodName}</h1>
                <h4>Calories: {foo.Calories}</h4>
                <h4>Carbohydrate: {foo.Carbohydrate} %</h4>
                <h4>Fat: {foo.Fat} %</h4>
                <h4>Protein: {foo.Protein} %</h4>
              </div>
              <div className="pie_chart">
                <PieChart
                  label={(props) => {
                    return props.dataEntry.title;
                  }}
                  data={[
                    {
                      title: "Carbs",
                      value: foo.Carbohydrate,
                      color: "#E38627",
                    },
                    { title: "Fat", value: foo.Fat, color: "#C13C37" },
                    { title: "Protein", value: foo.Protein, color: "#6A2135" },
                  ]}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Food;
