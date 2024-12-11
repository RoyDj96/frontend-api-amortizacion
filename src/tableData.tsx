import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TableData() {
  function createData(name: string, calories: number, fat: number) {
    return { name, calories, fat };
  }

  const rows = [
    createData("200.000", 9, 6),
    createData("200.000", 2, 9),
    createData("200.000", 262, 16),
    createData("4.200.000", 35, 7),
    createData("1.200.000", 5, 16.0),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Periodos</TableCell>
              <TableCell align="right">Intereres</TableCell>
              <TableCell align="right">Meses</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
console.log("hola")