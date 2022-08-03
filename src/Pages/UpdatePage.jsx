import React from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function UpdatePage() {
  const { getMakaroons, makaroons, deletMakaroons } =
    React.useContext(AdminContext);
  React.useEffect(() => {
    getMakaroons();
  }, []);
  return (
    <Container>
      <h2>Admin</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Вкус</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Фото</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {makaroons.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.taste}</TableCell>
              <TableCell>{item.price}сом</TableCell>
              {/* <TableCell>{item.photo}</TableCell> */}
              <TableCell>
                <img width={100} src={item.photo} alt="" />
              </TableCell>
              <TableCell>
                <Delete onClick={() => deletMakaroons(item.id)} />
              </TableCell>
              <TableCell>
                <Link to={`/admin/edit/${item.id}`}>
                  <Edit />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default UpdatePage;
