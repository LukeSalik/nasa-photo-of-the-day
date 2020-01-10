import React, { useState, useEffect } from "react";
import axios from "axios";

function Photo() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=sVJZmKksdkafCkQtiYHRjMfprpe6fQRoFgie6i5h"
      )
      .then(res => setData(res.data));
  }, []);

  console.log(data);
  return (
    <div className="wrapper">
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <img alt={data.title} src={data.url} />
      <h3>{data.copyright}</h3>
      <p>{data.explanation}</p>
    </div>
  );
}

export default Photo;
