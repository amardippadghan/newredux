import React from "react";
import { useSelector , useDispatch  } from "react-redux";
import ProductComponents from "./ProductComponents";
import { setProducts } from "../redux/actions/productAction";
import axios from "axios";
import { useEffect } from "react";
export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  });


  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}
