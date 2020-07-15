//TASK 1
const priceApple = 15.678;
const kidCar = 123.965;
const water = 9.2345;

console.log("Максимальне число: " + Math.max(priceApple, kidCar, water));


//TASK 2
console.log("Мінімальне число: " + Math.min(priceApple, kidCar, water));


//TASK 3
const priceForAllProducts = priceApple + kidCar + water;

console.log("ціна за всі продукти: " + priceForAllProducts);

//TASK 4


const a = Math.floor(priceApple);
console.log("заокруглена ціна яблука: " + a);
const b = Math.floor(kidCar);
console.log("заокруглена ціна дитячої машинки:  " + b);
const c = Math.floor(water);
console.log("заокруглена ціна води: " + c);

const priceForAll = a + b + c;
console.log("ціна за всі продукти: " +priceForAll);

//TASK 5
const priceFloorTo100 = Math.floor(priceForAll / 100) * 100;
console.log("ціна заокруглена до сотні: " + priceFloorTo100);

//TASK 6
const isPriceEven = priceForAll % 2 === 0 ? 'парною' : 'не парною';
console.log("Ціна є " + isPriceEven);

//TASK 7
const clientMoney = 500;
const left = 500 - priceForAllProducts;

console.log("решта: " +left);

const middleValue = (priceForAllProducts / 3).toFixed(2);
console.log("середнє значення: " + middleValue);

//TASK 8
const randomDiscount = Math.floor(Math.random() * 100);
const priceWithDiscount = (priceForAllProducts - (priceForAllProducts * (randomDiscount / 100))).toFixed(2);
console.log("ціна зі знижкою: " + priceWithDiscount);

const profit = ((229.8775 / 2) - (priceForAllProducts * (randomDiscount / 100))).toFixed(2);
console.log("чистий прибуток: " + profit); 
