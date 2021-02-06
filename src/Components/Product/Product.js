import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postToCart } from "../../Redux/ActionCreators";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {
  ProductsContainer,
  ProductCardContainer,
  ProductText,
  ProductImage,
  ProductDetails,
  AddToCartButton
} from "./Product.elements";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const [addingToCart, setAddingToCart] = useState(null);
  const noStyle = { boxShadow: "0px 0px 0px white" };
  const centerItems = { justifyContent: "center" };

  return (
    <ProductsContainer>
      {products.map((prod) => {
        return (
          <Card key={prod.id} style={noStyle}>
            <ProductCardContainer  className="d-flex flex-column">
              <ProductImage src={prod.image} alt={prod.title} />

              <ProductDetails>
                <div>
                  <CardContent>
                    <ProductText>
                      {prod.title.slice(0, 10)}
                    </ProductText>
                    <ProductText>
                      ${prod.price}
                    </ProductText>
                  </CardContent>
                </div>

                <CardActions style={centerItems}>
                  <AddToCartButton
                    data-testid="add-to-cart"
                    onClick={() => {
                      setAddingToCart(prod.id);
                      dispatch(postToCart(prod));
                      setTimeout(() => setAddingToCart(null), 1800);
                    }}
                  >
                    {addingToCart === prod.id ? "Added to cart" : "Add to cart"}
                  </AddToCartButton>
                </CardActions>
              </ProductDetails>
            </ProductCardContainer>
          </Card>
        );
      })}
    </ProductsContainer>
  );
};

export default Product;
