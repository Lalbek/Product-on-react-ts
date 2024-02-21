const cars = [
  {
    id: 1,
    title: "Продается Volkswagen Golf",
    year: 2018,
    price: 12000,
    city: "Москва",
  },
  {
    id: 2,
    title: "Продается Audi A4",
    year: 2015,
    price: 15000,
    city: "Санкт-Петербург",
  },
  {
    id: 3,
    title: "Продается BMW 3 Series",
    year: 2020,
    price: 25000,
    city: "Новосибирск",
  },
  {
    id: 4,
    title: "Продается Mercedes-Benz C-Class",
    year: 2016,
    price: 22000,
    city: "Екатеринбург",
  },
  {
    id: 5,
    title: "Продается Toyota Camry",
    year: 2019,
    price: 18000,
    city: "Казань",
  },
  {
    id: 6,
    title: "Продается Ford Focus",
    year: 2017,
    price: 13000,
    city: "Нижний Новгород",
  },
  {
    id: 7,
    title: "Продается Honda Civic",
    year: 2014,
    price: 11000,
    city: "Челябинск",
  },
  {
    id: 8,
    title: "Продается Hyundai Elantra",
    year: 2021,
    price: 20000,
    city: "Омск",
  },
  {
    id: 9,
    title: "Продается Mazda 3",
    year: 2013,
    price: 9000,
    city: "Ростов-на-Дону",
  },
  {
    id: 10,
    title: "Продается Nissan Altima",
    year: 2018,
    price: 16000,
    city: "Уфа",
  },
];
const totalPrices = cars.reduce((total, car) => {
  return total + car.price;
}, 0);

console.log(totalPrices);

// // const resultsSearch = cars.filter((item) => {
// //   const price = item.price;
// //   if (price <= 18000) {
// //     return item;
// //   }
// // });
// // console.log(resultsSearch);

// const searchByCity = (searchCity) => {
//   const searchCityUpperCase = searchCity.toUpperCase();

//     return cars.filter((car) => {
//       const city = car.city.toUpperCase();
//       if (city.includes(searchCityUpperCase)) {
//         return car;
//       }
//     });
// };
// console.log(searchByCity("Azam"));

// const expense = [650, 350, 150];

// const asadEarn = 3000;

// const benefitTotal = expenses.reduce((initTotal, expense) => {
//   return initTotal - expense;
// }, asadEarn);

// console.log(remainderTotal);

// const expenses = [650, 350, 150];

// const expensesTotal = expenses.reduce((initTotal, expense) => {
//   return initTotal + expense;
// }, 0);

// console.log(expensesTotal);

// const players = [
//   { name: "Lal", goals: 39 },
//   { name: "Abd", goals: 41 },
//   { name: "Azam", goals: 40 },
// ];
// const totalGoals = players.reduce((total, player) => total + player.goals, 0);
// console.log(totalGoals);
