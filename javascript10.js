//Question 1

var students = [
    { Name: "Hassham", Age: 19, Student_Id: 247 },
    { Name: "Ali", Age: 22, Student_Id: 260 },
    { Name: "Moiz", Age: 21, Student_Id: 255 },
    { Name: "Ibrahim", Age: 24, Student_Id: 252 }
  ];
  
  for (var i = 0; i < students.length; i++) {
    alert('Student Name '+students[i].Name);
    alert('Student Age '+students[i].Age);
    alert('Student Id '+students[i].Student_Id);
  }
//Question 2
  var students = [
    { Name: "Hassham", Age: 19},
    { Name: "Ali", Age: 22},
    { Name: "Moiz", Age: 21},
    { Name: "Idrahim", Age: 24}
  ]
  for (var i = 0; i < students.length; i++) {
        if (students[i].Age<20) {
            document.write(students[i].Name+ ' eligible for Module A classes'+'<br>')
        } else {
            document.write(students[i].Name+ ' not eligible for Module A classes'+'<br>')
        }
}
//Question 3
var StudentResult = [
  {
    Student_Name: 'Zia Khan',
    Student_ID: 'J30052425300',
    Subject_HTML: 80,
    Subject_CSS: 90,
    Subject_JAVASCRIPT: 90,
    Subject_BOOTSTRAP: 70,
    Total_Marks: 400,
  },
  {
    Student_Name: 'Ubaidullah',
    Student_ID: 'J30052425302',
    Subject_HTML: 60,
    Subject_CSS: 70,
    Subject_JAVASCRIPT: 65,
    Subject_BOOTSTRAP: 85,
    Total_Marks: 400
  }
];

var ObtainedMarksStudent1 =
  StudentResult[0].Subject_HTML +
  StudentResult[0].Subject_CSS +
  StudentResult[0].Subject_JAVASCRIPT +
  StudentResult[0].Subject_BOOTSTRAP;

document.write(
  'Student Name: ' + StudentResult[0].Student_Name + '<br>' +
  'Student ID: ' + StudentResult[0].Student_ID + '<br>' +
  'HTML Marks: ' + StudentResult[0].Subject_HTML + '<br>' +
  'CSS Marks: ' + StudentResult[0].Subject_CSS + '<br>' +
  'JavaScript Marks: ' + StudentResult[0].Subject_JAVASCRIPT + '<br>' +
  'Bootstrap Marks: ' + StudentResult[0].Subject_BOOTSTRAP + '<br>' +
  'Total Marks: 400'  + '<br>' +
  'Obtained Marks: ' + ObtainedMarksStudent1 + '<br>' +
  'Percentage: ' + (ObtainedMarksStudent1 / 400 * 100) + '%<br><br><br>'
);

var ObtainedMarksStudent2 =
  StudentResult[1].Subject_HTML +
  StudentResult[1].Subject_CSS +
  StudentResult[1].Subject_JAVASCRIPT +
  StudentResult[1].Subject_BOOTSTRAP;

document.write(
  'Student Name: ' + StudentResult[1].Student_Name + '<br>' +
  'Student ID: ' + StudentResult[1].Student_ID + '<br>' +
  'HTML Marks: ' + StudentResult[1].Subject_HTML + '<br>' +
  'CSS Marks: ' + StudentResult[1].Subject_CSS + '<br>' +
  'JavaScript Marks: ' + StudentResult[1].Subject_JAVASCRIPT + '<br>' +
  'Bootstrap Marks: ' + StudentResult[1].Subject_BOOTSTRAP + '<br>' +
  'Total Marks: 400'  + '<br>' +
  'Obtained Marks: ' + ObtainedMarksStudent2 + '<br>' +
  'Percentage: ' + (ObtainedMarksStudent2 / 400 * 100) + '%<br><br><br>'
);

if (ObtainedMarksStudent1 > ObtainedMarksStudent2) {
  document.write('Student 1 then eligible for scholarship ');
} else {
  document.write('Student 2 then eligible for scholarship ');
}
//Question 4
var arr = [
  { name: 'Asher', age: 22 },
  { name: 'Zubair', age: 20 },
  { name: 'Kashif', age: 23 },
  { name: 'Wasif', age: 17 },
  { name: 'Hanzala', age: 28 }
];
arr[3] = { name: 'Siddiq', age: 23 };
arr.push({ name: 'Umair', age: '23' });
arr.shift();

console.log(arr);

//Question 6
var students = [
  {
  _id: 'std1',
  name: 'Bill Gates',
  age: 30
  },
  {
  _id: 'std2',
  name: 'Steve Jobs',
  age: 30
  },
  {
  _id: 'std3',
  name: 'Suzanne Collins',
  age: 30
  }];
  
  var courses = [
  {
  name: 'Maths',
  std_id: ['std3', 'std1']
  },
  {
  name: 'Computer Science',
  std_id: ['std3', 'std2']
  },
  {
  name: 'Commerce',
  std_id: ['std1']
  },
  ]
  document.write('student_id: ' + students[0]._id+'<br>'+
  'student_name: '+ students[0].name+'<br>'+
  'Age: '+ students[0].age+'<br>'+
  'courses: '+courses[0].name+', '+courses[2].name+'<br><br>')
  document.write('student_id: ' + students[1]._id+'<br>'+
  'student_name: '+ students[1].name+'<br>'+
  'Age: '+ students[1].age+'<br>'+
  'courses: '+courses[1].name+'<br><br>')
  document.write('student_id: ' + students[2]._id+'<br>'+
  'student_name: '+ students[2].name+'<br>'+
  'Age: '+ students[2].age+'<br>'+
  'courses: '+courses[0].name+', '+courses[1].name+'<br><br>')














