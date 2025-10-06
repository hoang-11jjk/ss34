import type { Student } from "../../utils/types";

export type StudentAction =
| {type : 'ADD_STUDENT'; payload: Student}