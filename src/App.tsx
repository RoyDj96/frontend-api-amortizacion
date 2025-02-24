import "./App.css";
/* import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; */
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import TableData from "./tableData";

function App() {
  const [mto, setMto] = useState("");
  const [vint, setVint] = useState("");
  const [npla, setNpla] = useState("");
  const [data, setData] = useState([]);

  const dataAmort = async () => {
    try {
      await axios
        .post("https://backend-api-amortizacion.onrender.com/api/quota", {
          Mto: mto,
          Vint: vint,
          Npla: npla,
        })
        .then((res) => {
          console.log(res.data);
          setData(data);
          console.log(data, "🚜🚜");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "180px",
          flexDirection: "row",
          width: "780px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #403f3e",
        }}
      >
        <Box sx={{ padding: "4px" }}>
          <TextField
            type="number"
            label="Monto"
            value={mto}
            size="small"
            onChange={(e) => setMto(e.target.value)}
          />
        </Box>
        <Box sx={{ padding: "4px" }}>
          <TextField
            type="number"
            size="small"
            label="Interés"
            value={vint}
            onChange={(e) => setVint(e.target.value)}
          />
        </Box>
        <Box sx={{ padding: "4px" }}>
          <TextField
            type="number"
            size="small"
            label="Meses"
            value={npla}
            onChange={(e) => setNpla(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            marginTop: "0px",
            padding: "4px",
          }}
        >
          <Button variant="contained" onClick={dataAmort}>
            Calcular
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "380px",
          width: "760px",
          borderRadius: "10px",
          marginTop: "20px",
          overflow: "auto",
          overflowX: "hidden",
          padding: "10px",
          boxShadow: "0px 0px 10px #403f3e",
          marginBottom: "20px",
        }}
      >
        <TableData />
      </Box>
    </>
  );
}

export default App;
