/* 1. Запишіть в куки: "car=Mercedes"; "planer=Boeing". Зчитайте значення цих куки, 
збережіть у змінні та виведіть в консоль. В консолі введіть document.cookie, подивіться всі куки. */

setCookie('car', 'Mercedes');
setCookie('planer', 'Boeing');

let myCar = getCookie('car');
let myPlaner = getCookie('planer');
console.log(myCar);
console.log(myPlaner);
console.log(document.cookie);

/* 2. Створіть 2 кнопки і поле вводу. По кліку на одну буде записано cookie з текстом поля вводу, 
по кліку на другу - виводити alert зі строкою. Закрийте вкладку, відкрийте знову, перевірте,
чи зберіглося куки, клацнувши на другу кнопку. */

let userField = document.querySelector('#user-field');
let saveBtn = document.querySelector('#save-btn');
let showBtn = document.querySelector('#show-btn');

saveBtn.addEventListener('click', function(){
	setCookie('userValue', userField.value);
});

showBtn.addEventListener('click', function(){
	alert(getCookie('userValue'));
});