import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";
import { Container, TextField, Button } from "@mui/material";

function AdminEditPage() {
  const { getMakaroonsToEdit, makaroonsEdit, saveEditedMakaroons } =
    React.useContext(AdminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [taste, setTaste] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const handleSubmit = () => {
    const editedMakaroons = {
      name,
      taste,
      price,
      photo,
      id,
    };
    for (let i in editedMakaroons) {
      if (typeof editedMakaroons[i] === "string") {
        if (!editedMakaroons[i].trim()) {
          alert("Заполните поле");
          return;
        }
      }
    }
    saveEditedMakaroons(editedMakaroons);
    navigate("/admin");
  };

  React.useState(() => {
    getMakaroonsToEdit(id);
  }, []);

  React.useEffect(() => {
    if (makaroonsEdit) {
      setName(makaroonsEdit.name);
      setTaste(makaroonsEdit.taste);
      setPrice(makaroonsEdit.price);
      setPhoto(makaroonsEdit.photo);
    }
  }, [makaroonsEdit]);

  return (
    <div className="admin-edit-page">
      <Container>
        <h2>Редактировать</h2>
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
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Картинкиа"
            variant="standard"
          />
          <Button variant="outlined" type="submit">
            Добавить
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminEditPage;
