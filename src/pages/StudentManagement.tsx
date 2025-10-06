import type { Student } from '../utils/types';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';
import { useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState<Student[]>([
    
  ]);

  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  const handleSearch = (keyword: string) => {
    setStudents((prev) =>
      prev.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase())),
    );
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList  />
      </div>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentManagement;
