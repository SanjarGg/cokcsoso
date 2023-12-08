import React from "react";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";

// ! Add
function AdminAddPage() {
  const { sendMakaroons } = React.useContext(AdminContext);
  const [name, setName] = React.useState("");
  const [taste, setTaste] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [type, setType] = React.useState("");

  const handleSubmit = () => {
    const newMakaroons = {
      name: name.trim(),
      taste: taste.trim(),
      price,
      photo: photo.trim(),
      type: type.trim(),
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
    setPhoto("");
    setType("");
  };
  return (
    <div className="admi-add-page">
      <Container>
        <h1>Добавить товар</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            className="text-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Название"
            variant="standard"
          />
          <TextField
            className="text-field"
            value={taste}
            onChange={(e) => setTaste(e.target.value)}
            label="состав и описание"
            variant="standard"
          />
          <TextField
            className="text-field"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            label="Цена"
            variant="standard"
            type="number"
          />
          <TextField
            className="text-field"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Картинка"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel>Вид Товара</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Bид Товара"
            >
              <MenuItem value="box">Box</MenuItem>
              <MenuItem value="regular">Makaroon</MenuItem>
            </Select>
          </FormControl>
          <Button className="button-add" variant="outlined" type="submit">
            Добавить
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminAddPage;
