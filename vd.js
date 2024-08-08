// var topics = [
//   {
//     topic: "Front-End",
//     courses: [
//       { id:1,
//         title: "HTML, CSS" 
//       },

//       { id:2,
//          title: "Javascript" 
//       } 
//     ] 
//   },
    
//   {
//     topic:"Back-End",
//     courses: [
    
//       {
//         id:1,
//         title : "PHP"
//       },
    
//       {
//         id: 2,
//         title:"NodeJS" 
//       } 
//     ] 
//   }
// ];

//hiển thị element
// var newCourses = topics.reduce(function(accumulator, currantValue){
//   return accumulator.concat(currantValue.courses)
// }, [])

// var html = newCourses.map(function(array){
//   return`
//     <div>
//       <h2>
//         ${array.title}
//       </h2>
//     </div>
//   `
// })
// console.log(html.join(''))


// var newCourses = topics.reduce(hien, [])
// function hien(course, topic){
//   return course.concat(topic.courses)
// }
// console.log(newCourses)



// var html = topics.map(elements, [])
// function elements (array){
//   return `
//     <div>
//       <h2>
//         ${array.title}
//       </h2>
//     </div>
//   `
// }
// console.log(html.join(''))


// var resuilt = topics.reduce(hienThi, [])
// function hienThi (accumulator, currentValue){
//   return accumulator + currentValue.topic
// }

// console.log(resuilt)





// var resuilt = topics.reduce(function(accumulator, currentValue){
//   return accumulator.concat(currentValue.courses)
// }, [])

// console.log(resuilt)
// var newCourses = topics.reduce(hienThi, [])
// function hienThi(accumulator, currentValue){
//   return accumulator + currentValue.topic
// }

// console.log(newCourses)






// function hien(array){
//     return `
//       <h2>${array.title}</h2>
//     `
// }
// var result = topics.map(hien)
// console.log(result.join(''))



const sports = [
  { 
    id: 1,
    name: 'bóng rổ',
    like: 6,
    coin: 20  
  },
  
  { 
    id: 2,
    name: 'bơi',
    like: 5,
    coin: 20  
  },
  
  { 
    id: 3,
    name: 'bóng đá',
    like: 10,
    coin: 40  
  },
]
var print = [];
var resuilt = sports.forEach(mySport)
function mySport (array){
  return print.push(array.name)
}
console.log(resuilt.join(''));




// var resuilt = sports.reduce(hienThi, [])
// function hienThi(accumulator, currentValue){
//   return accumulator.concat(currentValue.name)  
// }
// console.log(resuilt)

// var resuilt = sports.map(hienThi)
// function hienThi(array){
//   return `
//     <h2>${array.name}</h2>
//   `
// }
// console.log(resuilt.join(' '))



// const numbers = [1, 2, 3, 4, 5]
// var resuilt = numbers.reduce(tong, 0)
// function tong(accumulator, currentValue){
//   return accumulator + currentValue 
// }

// console.log(resuilt)
// Array.prototype.myMap = function(cb){
//   var output = [];
//   var arrLength = this.length
// }


// var number = [1, 2, 3, 4]
// var htmls = number.myMap(myArray)
// function myArray(array){
//   return array * 2
// }

// console.log(htmls.join(''))