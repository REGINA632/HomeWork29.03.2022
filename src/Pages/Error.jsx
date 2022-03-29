import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Error</h1>
      <img
        src="https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8-%D0%BA%D0%BE-%D0%B0-%D0%BF%D1%80%D0%B5-%D0%BF%D0%BE%D1%81%D1%8B-%D0%BA%D0%B8-79880097.jpg"
        alt=""
      />
      <br />
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "red",
          height: "50px",
          width: "200px",
          fontSize: "25px",
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Error;
