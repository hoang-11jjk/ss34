import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/reducers';



const StudentList: React.FC = () => {
  const studentList = useSelector((state: RootState) => state.students);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, index) => (
            <TableRow key={student.id}>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="contained" color="error">
                    Xem
                  </Button>
                  <Button variant="contained" color="warning">
                    Sửa
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => confirm('Bạn có chắc chắn muốn xóa không')}
                  >
                    Xóa
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
