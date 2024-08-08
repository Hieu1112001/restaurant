// document.addEventListener("DOMContentLoaded", function() {
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const navUl = document.querySelector('.nav ul');

//     mobileMenuBtn.addEventListener('click', function() {
//         if (navUl.style.display === 'block') {
//             navUl.style.display = 'none';
//         } else {
//             navUl.style.display = 'flex';
//             navUl.style.flexDirection = 'column';
//         }
//     });
// });
// console.log('a')

// let a = prompt("nhap so bat ky a: ");
// let b = prompt("nhap so bat ky b: ");
// console.log(a, b);
// let c = a + b;
// if (c % 2 == 0){
//    console.log("số chẵn")
// }
// else{
//     console.log("số lẻ")
// }


// var language = ['js', 'php', 'ruby'
// ];
// console.log(language.slice(1, 1))

// var animal = ['Monkey', 'Tiger', 'Elephant']

// function getLastElement(array){
//     return array.slice(2)
// }

// var resuilt = getLastElement(animal)
// console.log(resuilt)

// var animals = ['Monkey', 'Tiger', 'Elephant'];


// function getLastElement(array){
//        return array.slice(2)
// }
// var result = getLastElement(animals);

// console.log(result);

// function Info(name, birth, address, phone,){
//     this.name = name;
//     this.birth = birth;
//     this.address = address;
//     this.phone = phone;
// }

// Info.prototype.getFullInfo = function(){
//     return `${this.name} ${this.birth} ${this.address} ${this.phone}`
// }

// var resuilt = new Info("nguyen hieu", 2001, "HaNoi", "0763117621")
// console.log(resuilt.getFullInfo())

// function getFirsElement(array){
//    return array.slice(0, 1)
// }

// var elemant = ['div', 'img', 'a', 'link']
// var resuilt = getFirsElement(elemant)
// console.log(resuilt);
// var now = new Date()
// console.log(now.getFullYear() + 1)

// function geuItem(arr){
//    var sum = 0;
//    var i;
//    for(i = 0; i < arr.length; i++){
//       sum = sum + arr[i]
//    }
//    return sum
// }

// var array = [1, 6, 9]
// console.log(geuItem(array))

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(orders){
//    var tong = 0;
//    for (var i = 0; i < orders.length; i++){
//      tong = tong + orders[i].price
//    }

//    return tong
// }

// console.log(getTotal(orders))


// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },

//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3400000
//     },

//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 2000000
//     }
// ]

// function getTotal(orders){
//     var tong = 0;
//     for (var i = 0; i < orders.length; i++){
//         tong = tong + orders[i].price
//     }

//     return tong
// }

// console.log(getTotal(orders))

// var myInfo = {
//     name: 'nguyen hieu',
//     age: 20,
// }

// var random = []
// for(var arr in myInfo){
//     random.push(`thuộc tính ${arr} có giá trị ${myInfo[arr]}`)
//     console.log(random)
// }


// function run(arr){
//     var resuilt = [];
//     for(var key in arr){
//         resuilt.push(`thuộc tính ${key} có giá trị ${arr[key]}`) 
//     }

//     return resuilt;
// }

// console.log(run({ name: "nguyen hieu", age: 12}))


// const character = "#";
// const count = 8;
// const rows = [];
// let resuilt = ""
// for(let i = 0; i < count; i++){
//     resuilt += character.repeat(i) + "\n"
// }

// for (const row of rows){
//     resuilt = resuilt + "\n" + row
// }

// console.log(resuilt);

// var array = ['a', 'b', 'c', 'a', 'b', 'c']
// console.log([...(new Set(array))])

// function giaiThua(number){
//     if(number > 0){
//         return number = number * giaiThua(number - 1)
//     }

//     return 1;
// }

// console.log(giaiThua(4))

// function giaiThua(number){
//     var output = 1;
//     for(var i = number; i > 0; i-- ){
//         output = output * i
//     }

//     return output;
// }

// console.log(giaiThua(6))

// var mang = [
//     {
//         id: 1,
//         name: 'javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'javascript',
//         coin: 300
//     },
//     {
//         id: 3,
//         name: 'hieu',
//         coin: 500
//     },
//     {
//         id: 4,
//         name: 'hieu',
//         coin: 450
//     }
// ]
// var resuilt = mang.filter(tim)
// function tim(mangs){
//     return mangs.name === 'hieu'
// } 

// console.log(resuilt)

// const sports = [
//     {
//         name: 'bóng rổ',
//         like: 6,
//         coin: 20   
//     },

//     {
//         name: 'bơi',
//         like: 5,
//         coin: 20   
//     },

//     {
//         name: 'bóng đá',
//         like: 10,
//         coin: 20   
//     },
// ]

// sử dụng reduce
// var i;
// var resuilt = sports.reduce(tinhTong, 0)
// function tinhTong(accumulator, currantValue){
//    i++;
//    return accumulator + currantValue.coin
// }
// console.log(resuilt)

/* dùng reduce() */
// var i;
// function total(accumulator, currantValue){
//     i++;
//     return accumulator + currantValue.coin;
// }
// var resuilt = sports.reduce(total, 0)
// console.log(resuilt)



// var resuilt = sports.filter(getMonstFavouriteSport)
// function getMonstFavouriteSport(array){
//    return array.like > 5;
// }

// console.log(resuilt)



/* dùng map */
// var resuilt = sports.map(noi)
// function noi(array){
//     return `<h2>${array.name}</h2>`
// }

// console.log(resuilt.join('-'))


/* bài tập vận dụng */

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
// ];

// var resuilt = watchList.filter(total)

// function total (tim){
//   return tim.Director === 'Christopher Nolan'
// }

// console.log(resuilt)


// function tinh(accumulator, currantValue){
//     return accumulator + Number(currantValue.imdbRating)
// }

// var tong = watchList.reduce(tinh, 0)
// console.log(tong)



// bài tập làm phẳng mảng
// var topics = [
//   {
//     topic: "fe",
//     courses: [
//       {
//         id: 1,
//         title: "html, css"
//       },

//       {
//         id: 2,
//         title: "js"
//       }
//     ]
      
//   },

//   {
//     topic: "BE",
//     courses: [
//       {
//         id: 1,
//         title: "php "
//       },

//       {
//         id: 2,
//         title: "nodejs"
//       }
//     ]
//   },
// ];

// var resuilt = topics.reduce(layra, [])
// function layra(accumulator, currantValue){
//   return accumulator.concat(currantValue.courses)
// }

// console.log(resuilt)

// var resuilt = topics.reduce(layra, [])
// function layra(accumulator, currantValue){
//   return accumulator.concat(currantValue.courses)
// }

// console.log(resuilt)





