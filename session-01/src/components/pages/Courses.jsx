import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8010/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div>
      <h2>Matières</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="center">Matière</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow
                key={course._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {course._id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {course.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
