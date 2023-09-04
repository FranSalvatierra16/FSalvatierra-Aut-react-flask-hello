import React from "react";

export const Navbar = () => {
  let token = sessionStorage.getItem("token");
  return (
    <ul className="nav justify-content-center ">
      <li className="nav-item">
        <a className="nav-link active text-white" aria-current="page" href="/">
          Home
        </a>
      </li>
      {token ? (
        ""
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link text-white" href="/login">
              Log in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/signup">
              Sign Up
            </a>
          </li>
        </>
      )}

      <li className="nav-item">
        <a className="nav-link text-white" href="/private">
          Private
        </a>
      </li>
    </ul>
  );
};