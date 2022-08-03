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
  const { getMakaroons, makaroons } = React.useContext(ClientContext);

  React.useEffect(() => {}, []);

  return (
    <div className="all-products">
      <Container>
        <h2>Все продукты</h2>
        <div className="products">
          {makaroons.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" height={140} image={item.photo} />
              <CardContent>
                <Typography
                  className="product-card-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <ul>
                  <li>
                    <span>Название:</span>
                    <span>{item.name}</span>
                  </li>
                  <li>
                    <span>Цена:</span>
                    <span>{item.price}</span>
                  </li>
                </ul>
                <Button>Добавить в корзину</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
  return <div>AllProductPage</div>;
}

export default AllProductPage;
