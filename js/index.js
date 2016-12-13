// // for (var i = 10; i >= 2; i--) {
// //     if (i % 2 === 0) {
// //         document.write(i);
// //         document.write('<br>');
// //     }
// // }

// // var i = 0;
// // while (i <= 10) {
// //     document.write(i);
// //     document.write('<br>');
// //     i++;
// // }

// // var i = 0;
// // do {
// //     document.write(i);
// //     document.write('<br>');
// //     i++;
// // } while (i <= 10)

// // var arr = [1,2,3];
// // arr[10] = 10;

// // // for (var i = 0; i < arr.length; i++) {
// // //     document.write(arr[i]);
// // //     document.write('<br>');
// // // }

// // var counter = 0;
// // arr.forEach(function(el) {
// //     counter++;
// // });
// // document.write(counter);

// var students = {
//     vasyl: 20,
//     petro: 25,
//     ivan: 23
// }

// // document.write(students['vasyl']);

// for (var key in students) {
//   document.write(key + ': ' + students[key]);
//   document.write('<br>');
// }

// var student = {
//     name: 'Vasyl',
//     age: 20
// }

// document.write(student.name  + 
//  ': ' + student.age + '<br>');
 
//  student.learn = function(what) {
//     document.write(this.name + ' is learning ' + what);
//  }
 
// student.learn('HTML');
// student.learn('JavaScript');

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.learn = function(what) {
//         document.write(this.name + 
//           ' is learning ' + what + '<br>');
//     }
// }

// var petro = new Student('Petro', 25);
// var ivan = new Student('Ivan', 23);

// petro.learn('JS');
// ivan.learn('C#');

lnk.addEventListener('click', function(e) {
    e.preventDefault();
})