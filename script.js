// // Створення об'єкта студента
// function Student(name, surname, age, id, averageGrade) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.id = id;
//     this.averageGrade = averageGrade;
//   }
  
//   // Створення об'єкта для управління групою студентів
//   function StudentGroup() {
//     this.students = [];
  
//     // Метод для додавання нового студента
//     this.addStudent = function(student) {
//       this.students.push(student);
//     };
  
//     // Метод для видалення студента за ID
//     this.removeStudent = function(id) {
//       this.students = this.students.filter(student => student.id !== id);
//     };
  
//     // Метод для виведення списку всіх студентів
//     this.printStudents = function() {
//       this.students.forEach(student => {
//         console.log(`Ім'я: ${student.name}, Прізвище: ${student.surname}, Вік: ${student.age}, ID: ${student.id}, Середній бал: ${student.averageGrade}`);
//       });
//     };
  
//     // Метод для пошуку студента за ID
//     this.findStudentById = function(id) {
//       return this.students.find(student => student.id === id);
//     };
//   }
  
//   // Створення екземпляру групи студентів
//   const group = new StudentGroup();
  
//   // Додавання студентів
//   group.addStudent(new Student('Іван', 'Петров', 20, 123, 85));
//   group.addStudent(new Student('Марія', 'Іванова', 19, 456, 92));
  
//   // Виведення списку студентів
//   group.printStudents();
  
//   // Пошук студента за ID
//   const foundStudent = group.findStudentById(123);
//   console.log(foundStudent);
  
//   // Видалення студента за ID
//   group.removeStudent(456);
//   group.printStudents();
// Получаем элементы DOM
// ... (прочие части кода)

// Получаем длительность анимации из CSS
// Получаем элементы DOM

