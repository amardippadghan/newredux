import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Card, Grid, Image } from "semantic-ui-react";

export default function ProductComponents() {
  const products = useSelector((state) => state.allProducts.product);

  return (
    <Grid relaxed columns={4} doubling stackable>
      {products.map((product) => {
        const { id, image, title, price, category } = product;
        return (
          <Grid.Column key={id}>
            <Link to={`/product/${id}`}>
              <Card style={{ height: "100%" }}>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{title}</Card.Header>
                  <Card.Description>{price}</Card.Description>
                  <Card.Description>{category}</Card.Description>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        );
      })}
    </Grid>
  );
}
