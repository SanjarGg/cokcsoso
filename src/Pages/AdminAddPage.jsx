import React from "react";
import { Container, TextField, Button } from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";

// ! Add
function AdminAddPage() {
  const { sendMakaroons } = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [taste, setTaste] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const handleSubmit = () => {
    const newMakaroons = {
      name: name.trim(),
      taste: taste.trim(),
      price,
      photo: photo.trim(),
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
            label="Вкус"
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
          <Button className="button-add" variant="outlined" type="submit">
            Добавить
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminAddPage;
