import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
//import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="TRANSPORT" />

          <div className="banner">
            <p>Welcome to JU Transport</p>
            <h1>CAMPUS TRANSPORTATION SIMPLIFIED</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
