import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

interface TableDataProps {
  data: any;
}

export default function TableData ({ data }: TableDataProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if(!data.amortizacion) return <div>Loading...</div>;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.amortizacion.length - page * rowsPerPage);
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
            {data.amortizacion
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
              .map((row: any, index: number) => (
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.amortizacion.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
