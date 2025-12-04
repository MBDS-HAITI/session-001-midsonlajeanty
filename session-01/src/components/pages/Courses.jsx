import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function Courses({ data }) {
  const cousesSet = new Set(data.map((item) => item.course));
  const uniqueCourses = Array.from(cousesSet);

  return (
    <div>
      <h2>Matières</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Matière</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueCourses.map((course) => (
              <TableRow
                key={course}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {course}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
