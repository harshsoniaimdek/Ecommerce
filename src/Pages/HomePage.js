import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";

import fireDB from "../fireConfig";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, } from "react-redux";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
 
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
 
      const users = await getDocs(collection(fireDB, "items"));
      const productsArray = [];
      

      setProducts(productsArray);
    
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


 

  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="d-flex w-50 align-items-center my-3 justify-content-center">
          
          <input
            type="text"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            className="form-control mx-2"
            placeholder="search items"

          />
          <select
            className="form-control mt-3"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="men-wear">MEN'S</option>
            <option value="women-wear">WOMEN'S</option>
            <option value="gaming">GAMING ACCESSORIES</option>
            <option value="electronics">ELECTRONICS</option>
          </select>
        </div>
        <div className="row">
          {products
            .filter((obj) => obj.name.toLowerCase().includes(searchKey))
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .map((product) => {
              return (
                <div className="col-md-4">
                  <div className="m-2 p-1 product position-relative">
                    <div className="product-content">
                      <div className="text-center">
                        <img
                          src={product.imageURL}
                          alt=""
                          className="product-img"
                        />
                      </div>
                      <p>{product.name}</p>
                      <p>Phone no : {product.number}</p>
                    </div>
                    <div className="product-actions">
                      <div className="d-flex">
                        <button><Link to="/discription">View</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;