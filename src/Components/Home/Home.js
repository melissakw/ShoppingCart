import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductsPage/ProductsPage";
import HeaderBar from "../HeaderBar/HeaderBar";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HomeContainer } from "./Home.elements";
import { AppContainer, LoadingContainer } from "../App.elements";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const endpoint = "http://localhost:8000/products";

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(endpoint);
      let updatedResponse = response.data.map((obj) => {
        delete obj["description"];
        delete obj["category"];
        return obj;
      });
      setProducts(updatedResponse);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContainer>
      <HeaderBar />

      <HomeContainer>
        <h1>Products</h1>
        {isLoading && (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        )}
        <div>{error && <p>Oops... please try again!</p>}</div>
        <ProductsPage products={products} />
      </HomeContainer>
    </AppContainer>
  );
};

export default Home;
