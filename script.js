function funP() {
    if (x < car.length - 1) {                       
        x += 1;  // Увеличиваем индекс x, если он меньше последнего элемента
    } else {
        x = 0;  // Сбрасываем индекс x на 0, если он достиг конца
    }
    document.documentElement.style.setProperty("--el", x * (-300) + 'px');  // Устанавливаем смещение для слайдера
}

function funM() {
    if (x > 0) {                       
        x -= 1;  // Уменьшаем индекс x, если он больше 0
    } else {
        x = car.length - 1;  // Устанавливаем индекс x на последний элемент, если он на нуле
    }                               
    form1.reset()
    form2.reset()
    form3.reset()
    document.documentElement.style.setProperty("--el", x * (-300) + 'px');  // Устанавливаем смещение для слайдера
    
} 

let form1 = document.forms.form1 // Выбор форм
let form2 = document.forms.form2
let form3 = document.forms.form3

let car = document.getElementsByClassName('def');  // Элементы с классом 'def'
let x = 0;  // Счётчик

const btnBack = document.getElementById('btnBack1'); // Присвоение действий кнопкам назад
btnBack.addEventListener('click', funM);
const btnBack2 = document.getElementById('btnBack2');
btnBack2.addEventListener('click', funM);



form1.addEventListener('submit', (event) => { // Обработка формы
    event.preventDefault(); 
    let result = '';
    let test = true;

    if (form1.login.validity.valid) { // Проверка логина
        result += "Имя: " + form1.login.value + '\n' // Присвоение результата, если логин прошёл проверку
        form1.login.labels[0].innerText = "" // Очищение комментария, если логин прошёл проверку
    } else {
        form1.login.labels[0].innerText = "ОШИБКА! Неверно введён логин." 
        test = false;
    } 

    if (form1.date.validity.valid) {
        result += "Дата рождения: " + form1.date.value + '\n'
        form1.date.labels[0].innerText = ""
    } else {
        form1.date.labels[0].innerText = "ОШИБКА! Неверно введена дата."
        test = false;
    } 

    result += "Пол: " + form1.gender.value 

    if (test) {
        // form3.r1.value = result     // Это вариант, как работает через форму с iput, но оно не красиво, поэтому я убрала этот кусок кода
        document.getElementById("res1").innerText = result //Вывод в div 3 формы результата
        funP() // Перемещение на следующий слайдер
    }
})

form2.addEventListener('submit', (event) => {
    event.preventDefault(); 
    res = 0;   // Счётчик правильных ответов
    
    if (form2.name_pr.validity.valid) {
        res += 1 // Если ответ прошёл проверку на правильность, то к счётчику правильных ответов добавляем 1
    } else {
        res = res // Иначе оставить результат, как он был
    }

    if (form2.what_eat.validity.valid) {
        res += 1
    }
    else {
        res = res
    }

    if (form2.what_animal.validity.valid) {
        res += 1
    } else {
        res = res
    }

    if (form2.chameleon.value == 1) {
        res += 1
    } else {
        res = res
    }

    if (form2.daughter.value == 1) {
        res += 1
    } else {
        res = res
    }

    if (form2.men.value == 1) {
        res += 1
    } else {
        res = res
    }

    // form3.r2.value = res   // Это вариант, как работает через форму с iput, но оно не красиво, поэтому я убрала этот кусок кода              
    
    document.getElementById("res2").innerText = res
    funP()

    if (res == 6) { // А это просто для красивого оформления, присвоение классов и цветов по ответам
        document.getElementById('res2').classList.add('cogr')
    } else {
        if (res == 4 || res == 5) {
            document.getElementById('res2').classList.add('almcogr')
        } else {
            document.getElementById('res2').classList.add('notcogr')
        }
    }

})







