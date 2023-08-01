export default function getStudentIdSum(studentsList) {
  return studentsList.reduce((total, studentsList) => total + studentsList.id, 0);
}
