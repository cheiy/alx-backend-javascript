export default function getListStudentIds(objArray) {
  let idArray = [];
  if (objArray instanceof Array) {
    idArray = objArray.map((student) => student.id);
  }

  return idArray;
}
