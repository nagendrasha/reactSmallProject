import React, { useState } from "react";
import Header from "../componants/Header";
import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Notes = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <>
      <Header name={"My Sticky Notes"} />
      <Grid container sx={{ m: 2, display: "flex", justifyContent: "center" }}>
        <Box>
          <TextField
            sx={{ mr: 1 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ mr: 1 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            onClick={addData}
            sx={{ backgroundColor: "red" }}
            variant="contained"
          >
            Add <AddIcon />
          </Button>
        </Box>
      </Grid>
      <Grid container sx={{ m: 2, display: "flex", justifyContent: "center" }}>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((e, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{e.name}</TableCell>
                    <TableCell align="right">{e.email}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => removeItem(index)}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </>
  );
};

export default Notes;
