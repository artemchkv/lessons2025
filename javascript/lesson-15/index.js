// function fn(a, ...args) {
//   console.log(a);
//   console.log('🚀 ~ fn ~ args:', args);
// }
// fn(2, 3, 4, 5);

// const obj = {
//   name: 'Yevhenii',
//   age: 28,
//   city: 'Kyiv',
//   location: {
//     lat: 50.4501,
//     lng: 30.5234,
//   },
// };
// // console.log('🚀 ~ obj:', obj);

// const {
//   name: userName,
//   city: cityName,
//   location: { lat: latitude, lng: longitude },
// } = obj;
// console.log(
//   `My name is ${userName}. I live in ${cityName}. My location is: lat - ${latitude}, lng - ${longitude}`,
// );

// const array = [1, 2, 3, 4, 5];
// const [first, second, ...some] = array;
// console.log('🚀 ~ first:', first);
// console.log('🚀 ~ second:', second);
// console.log('🚀 ~ some:', some);

// const name = obj.name;
// console.log('🚀 ~ name:', name);
// const age = obj.age;
// console.log('🚀 ~ age:', age);
// const city = obj.city;
// console.log('🚀 ~ city:', city);

// const obj2 = {
//   skill: 'hight',
//   ...obj,
// };
// console.log('🚀 ~ obj2:', obj2);

// const array1 = [1, 2, 3];
// const array1_1 = [{ name: 'Petr', surname: 'Ivanov' }, 2, 3];

// const array2 = [4, 5, 6];
// const array3 = [...array1, ...array2, ...array1_1];
// console.log('🚀 ~ array3:', array3);

// const fn = (x, y) => x + y;
// import { summ, sq } from './lib/summa.js';
// import country from './constant/country.js';

// const result = summ(12, 50);
// console.log('🚀 ~ result:', result);

// const result2 = sq(10, 50);
// console.log('🚀 ~ result2:', result2);

// const myCountry = country[1];
// console.log('🚀 ~ myCountry:', myCountry);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Random number is less than or equal to 0.5'));
    }
  }, 1000);
});
console.log('🚀 ~ myPromise:', myPromise);

// myPromise
//   .then((result) => {
//     console.log('Promise resolved with:', result);
//   })
//   .catch((error) => {
//     console.error('Promise rejected with:', error);
//   })
//   .finally(() => {
//     console.log('Promise has been settled (either resolved or rejected)');
//   });

const asyncFunction = async () => {
  try {
    const result = await myPromise;
    console.log('Async function resolved with:', result);
  } catch (error) {
    console.error('Async function rejected with:', error);
  } finally {
    console.log('Async function has completed (either resolved or rejected)');
  }
};

asyncFunction();
