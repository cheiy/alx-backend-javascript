export default function getStudentsByLocation(studentsArray, city) {
  let locationsArray = [];
  if (studentsArray instanceof Array) {
    locationsArray = studentsArray.filter((studentsArray) => studentsArray.location === city);
  }
  return locationsArray;
}
