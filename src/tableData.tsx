import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableDataProps {
  data: any; // Replace 'any' with the appropriate type if known
}

export default function TableData ({ data }: TableDataProps) {
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mes</TableCell>
              <TableCell align="right">Capital</TableCell>
              <TableCell align="right">Interes</TableCell>
              <TableCell align="right">Saldo final</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.amortizacion && data.amortizacion.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.Mes}</TableCell>
                <TableCell align="right">{row.capital}</TableCell>
                <TableCell align="right">{row.interes}</TableCell>
                <TableCell align="right">{row.saldo_final}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
