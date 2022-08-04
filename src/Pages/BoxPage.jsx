import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";
import { AdminContext } from "../contexts/AdminProvider";

function BoxPage() {
  // const { getBoxMakaroons } = React.useContext(ClientContext);
  const { boxmakaroonos, getBoxMakaroons } = React.useContext(AdminContext);

  React.useEffect(() => {
    getBoxMakaroons();
  }, []);

  return (
    <div className="all-products">
      <Container>
        <h2>Все боксы</h2>
        <div className="products">
          {boxmakaroonos.map((item) => (
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
      </Container>
    </div>
  );
}

export default BoxPage;
