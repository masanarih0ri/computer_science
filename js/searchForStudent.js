class Student {
  constructor(firstName, lastName, age, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this. grade = grade;
  }
}

// studentIdをセットする関数を作る
// オブジェクトによる値渡しなので実パラメータの状態が変化する
// 
function setStudentIds(students) {
  for(let i = 0; i < students.length; i++) {
    students[i].id = i + 1;
    console.log(`Student ${students[i].firstName} has an id of ${students[i].id}`)
  }
}

// 下記の関数の計算量はO(1)
function searchForStudent(id, listOfStudents) {
  // 生徒にふられたidは1から始まるためidから1を引いた値をセットする
  let correctId = id - 1;
  if(correctId >= listOfStudents.length && correctId) {
    return "Not Found!"
  }
  let studentFound = listOfStudents[correctId];
  return `${studentFound.firstName} ${studentFound.lastName}`;
}

// 下記の関数の計算量はO(n)
function searchForStudentLinear(id, listOfStudents) {
  for(let i = 0; i < listOfStudents.length; i++) {
    if(listOfStudents[i].id === id) {
      return `${listOfStudents[i].firstName} ${listOfStudents[i].lastName}`
    }
  }
  return "Not Found!"
}

// Studentオブジェクトの配列を生成する
let students = [];

students.push(new Student("taro", "tanaka", 15, 10));
students.push(new Student("hanako", "sato", 14, 10));
students.push(new Student("taichi", "suzuki", 14, 9));
students.push(new Student("momoko", "ota", 16, 11));

setStudentIds(students);

console.log(students);
console.log("Search for id of 3 constant time - " + searchForStudent(3, students));
console.log("Search for id of 3 linear time - " + searchForStudentLinear(3, students));
console.log("Search for id of 10 constant time - " + searchForStudent(10, students));