import React from "react";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";

function AdminPage() {
  const { sendMakaroons } = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [taste, setTaste] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = () => {
    const newMakaroons = {
      name: name.trim(),
      brand: taste.trim(),
      price,
    };
    for (let i in newMakaroons) {
      if (!newMakaroons[i]) {
        alert("Заполните поля");
        return;
      }
    }
    sendMakaroons(newMakaroons);
    setName("");
    setTaste("");
    setPrice("");
  };
  return (
    <div className="admi-add-page">
      <Container>
        <h1>Новый Макаронс!</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Название"
            variant="standard"
          />
          <TextField
            value={taste}
            onChange={(e) => setTaste(e.target.value)}
            label="Вкус"
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            label="Цена"
            variant="standard"
            type="number"
          />
          <Button variant="outlined" type="submit">
            Добавить
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminPage;
