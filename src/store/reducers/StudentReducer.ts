import type { Student } from "../../utils/types";
import type { StudentAction } from "../actions/StudentAction";

const studentList: Student[] = [
  { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
  { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

const initialState:Student[] = studentList;

export default function studentReducer (state:Student[] = initialState, action: StudentAction): Student[] {
    switch (action.type) {
        case 'ADD_STUDENT':
            
            break;
    
        default:
            break;
    }
}