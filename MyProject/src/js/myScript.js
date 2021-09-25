"use strict"
alert("Доброго времени суток и добро пожаловать на мой сайт!");
if (confirm("Предлагаю Вам выбрать нужные параметры вашего будущего сайта и рассчитать его стоимость")){

var calcPrice = [];
var calcTime = [];

var prices = [
    [3000, 5000, 7000, 8000, 4000],
    [2000, 3000, 3000, 4000, 5000],
    [3000, 2000, 1000],
]
var time = [
    [2, 5, 10, 8, 5],
    [2, 3, 3, 4, 4],
    [2, 1, 0],
]

var siteType;
while (true){
    siteType = prompt ("Выберите тип сайта из предложенных и впишите его номер в поле ниже: \n 1. Сайт визитка \n 2. Корпоративный сайт \n 3. Интернет-магазин \n 4. Интернет-витрина \n 5. Промо-сайт");

    if (siteType == 1) calcPrice.push(3000), calcTime.push(2)
    if (siteType == 2) calcPrice.push(5000), calcTime.push(5)
    if (siteType == 3) calcPrice.push(7000), calcTime.push(10)
    if (siteType == 4) calcPrice.push(8000), calcTime.push(8)
    if (siteType == 5) calcPrice.push(4000), calcTime.push(5) 
    if (siteType == 1 || siteType == 2 || siteType == 3 || siteType == 4 || siteType == 5)
    break;
    alert( "Выберите номер типа сайта!" );
}
console.log(siteType);

var siteDesign;
while (true){
    siteDesign = prompt ("Выберите дизайн сайта из предложенных и впишите его номер в поле ниже: \n 1. Классический стиль \n 2. Минимализм \n 3. Flat дизайн \n 4. Красивая типографика \n 5. Hi-Tech дизайн");

    if (siteDesign == 1) calcPrice.push(2000), calcTime.push(2)
    if (siteDesign == 2) calcPrice.push(3000), calcTime.push(3) 
    if (siteDesign == 3) calcPrice.push(3000), calcTime.push(3)
    if (siteDesign == 4) calcPrice.push(4000), calcTime.push(4)
    if (siteDesign == 5) calcPrice.push(5000), calcTime.push(4)
    if (siteDesign == 1 || siteDesign == 2 || siteDesign == 3 || siteDesign == 4 || siteDesign == 5)
    break;
    alert( "Выберите номер дизайна сайта!" );
}
console.log(siteDesign);

var siteAdapt;
while (true){
    siteAdapt = prompt ("Выберите адаптивность сайта из предложенных и впишите его номер в поле ниже: \n 1. Адативный \n 2. Частично адаптивный \n 3. Неадаптивный");

    if (siteAdapt == 1) calcPrice.push(2000), calcTime.push(2)
    if (siteAdapt == 2) calcPrice.push(1000), calcTime.push(1) 
    if (siteAdapt == 3) calcPrice.push(0), calcTime.push(0)
    if (siteAdapt == 1 || siteAdapt == 2 || siteAdapt == 3)
    break;
    alert( "Выберите адаптивность сайта!" );
}
console.log(siteAdapt);

console.log(calcPrice);
console.log(calcTime);

var sumPrice=0;
for(var i=0;i<calcPrice.length;i++){
    sumPrice = sumPrice + calcPrice[i];
}
var sumTime=0;
for(var i=0;i<calcTime.length;i++){
    sumTime = sumTime + calcTime[i];
}
console.log(sumPrice);
console.log(sumTime);

if (sumTime <= 4) alert("Примерная стоимость вашего сайта будет равна " + sumPrice + " рублей \n Время выполнения приблизительно будет равно " + sumTime + " дня.")
else alert("Примерная стоимость вашего сайта будет равна " + sumPrice + " рублей \n Время выполнения приблизительно будет равно " + sumTime + " дней.")
}
