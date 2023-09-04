import React from "react";
import "../../styles/home.css";
import background from "../../img/cool-background.png";
import { Banner } from "../component/Banner";

export const Home = () => {
  let token = sessionStorage.getItem("token");

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div
        className="w-25 col-auto p-5 text-center rounded-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {!token || token === null || token === undefined ? (
          <>
            <span>Please login or register 👽</span>
          </>
        ) : (
          <Banner />
        )}
      </div>
    </div>
  );
};