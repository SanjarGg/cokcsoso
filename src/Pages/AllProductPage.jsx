import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function AllProductPage() {
  const { getMakaroons, makaroons, currentPage, pagesCount, setCurrentPage } =
    React.useContext(ClientContext);

  React.useEffect(() => {
    getMakaroons();
  }, []);

  React.useEffect(() => {
    getMakaroons();
  }, [currentPage]);

  return (
    <div className="all-products">
      <Container>
        <h2>Все продукты</h2>
        <div className="products">
          {makaroons.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" height={200} image={item.photo} />
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
                    <span>{item.taste}</span>
                  </li>
                  <li>
                    <span>Цена:</span>
                    <span>{item.price}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="pagination-block">
          <Pagination
            onChange={(_, newValue) => setCurrentPage(newValue)}
            count={pagesCount}
            shape="rounded"
            color="secondary"
          />
        </div>
      </Container>
    </div>
  );
}

export default AllProductPage;
