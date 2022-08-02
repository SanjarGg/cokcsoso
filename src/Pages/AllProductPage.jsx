import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Pagination,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function AllProductPage() {
  const {} = React.useContext(ClientContext);

  React.useEffect(() => {}, []);

  return (
    <div className="all-products">
      <Container>
        <h2>All Products</h2>
        <div className="products">
          {makaroons.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" height={140} image={item.photo} />
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllProductPage;
