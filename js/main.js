/*
Ключове слово let в JavaScript використовується для створення змінних

document - це об'єкт у JavaScript, який представляє HTML-документ, який відображається у веб-браузері. Він є частиною DOM (Document Object Model),
яка визначає структуру HTML-документа і надає інтерфейс для доступу до елементів цього документа та їх властивостей та методів

innerHTML - це властивість DOM-елементу веб-сторінки, яка дозволяє отримати або встановити HTML-вміст в середині цього елементу
*/


// Завдання 1

// Функція, яка приховує середні цифри числа та відображає результат після введення користувачем числа
function hideAndShowHiddenNumber() {
    // Отримуємо введене користувачем число
    let input = document.getElementById("numberInput").value; // getElementById - Returns a reference to the first object with the specified value of the ID attribute
    
    // Перетворюємо введення в число
    let num = parseInt(input); // parseInt - Converts a string to an integer
    
    // Перевіряємо чи введене значення - це число та чи воно складається з чотирьох цифр
    if (!isNaN(num) && input.length === 4) { // isNaN - Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)
        // Перетворюємо число у рядок, розбиваємо його на масив цифр, заміняємо середні цифри на _ та з'єднуємо знову
        let digits = num.toString().split('');
        let hiddenNum = digits[0] + '_' + '_' + digits[3];
        
        // Виводимо результат
        document.getElementById("result_1").innerText = hiddenNum;
    } else {
        // Якщо введене значення не є числом або не складається з чотирьох цифр, виводимо помилку
        document.getElementById("result_1").innerText = "Введіть чотирицифрове число! Спробуйте ще раз!";
    }
}

// Завдання 2

function findMostDistantPoint() {
    // Отримуємо координати точок A і B введені користувачем
    let xA = parseInt(document.getElementById("xA").value);
    let yA = parseInt(document.getElementById("yA").value);
    let xB = parseInt(document.getElementById("xB").value);
    let yB = parseInt(document.getElementById("yB").value);

    // Обчислюємо відстані від кожної точки до початку координат (0,0)
    let distanceA = Math.sqrt(xA * xA + yA * yA); // sqrt - Returns the square root of a number
    let distanceB = Math.sqrt(xB * xB + yB * yB);

    // Порівнюємо відстані і визначаємо найбільш віддалену точку
    let result = ""; //порожній рядок
    if (distanceA > distanceB) {
        result = "Точка A є найбільш віддаленою від початку координат (0,0).";
    } else if (distanceB > distanceA) {
        result = "Точка B є найбільш віддаленою від початку координат (0,0).";
    } else {
        result = "Точки A та B розташовані на однаковій відстані від початку координат (0,0).";
    }

    // Виводимо результат
    document.getElementById("result_2").innerText = result;
}

// Завдання 3

// Функція, яка знаходить трицифрові числа, які містять певну цифру та обчислює їх суму
function findNumbersAndCalculateSum() {
    // Отримання введеної користувачем цифри
    let digit = parseInt(document.getElementById("digitInput").value); // parseInt - Converts a string to an integer
    // Перевірка, чи введене значення є цифрою в межах від 0 до 9
    if (isNaN(digit) || digit < 0 || digit > 9) { // isNaN - Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)
        // Вивід повідомлення про некоректне введення
        document.getElementById("result_3").innerText = "Введіть коректну цифру (0-9)!";
        return; // Завершення функції у випадку некоректного введення
    }

    // Масив для зберігання знайдених чисел
    let numbers = [];
    // Змінна для зберігання суми чисел, що задовольняють умову
    let sum = 0;
    // Пошук трицифрових чисел, які містять введену цифру
    for (let i = 100; i < 1000; i++) {
        let numberStr = i.toString(); // Перетворення числа у рядок для перевірки
        if (numberStr.includes(digit.toString())) { // Перевірка, чи містить рядок введену цифру // includes - Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false
            numbers.push(i); // Додавання числа до масиву, якщо умова виконується // push - Appends new elements to the end of an array, and returns the new length of the array
            sum += i; // Додавання числа до суми, якщо воно містить задану цифру
        }
    }

    // Формування рядка з результатом
    let result = "Трицифрові числа, які містять цифру " + digit + ": " + numbers.join(", ") + "<br>" +
                 "Сума трицифрових чисел, які містять цифру " + digit + ": " + sum;
    // Виведення результату на сторінку
    document.getElementById("result_3").innerHTML = result;
}


// Завдання 4

// const - це ключове слово в JavaScript, яке використовується для оголошення змінних зі значенням, яке не може бути змінене.

function findPalindromeNumbers() {
    // Функція для пошуку паліндромних чисел та їх квадратів у вказаному діапазоні
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    let result = ""; //порожній рядок

    // Функція перевірки, чи є число паліндромом
    function isPalindrome(num) {
        const strNum = num.toString(); //перетворює числове значення num на рядок
        return strNum === strNum.split('').reverse().join(''); //перевертає рядок strNum
    }

    for (let i = start; i <= end; i++) {
        const square = i * i; // Знаходимо квадрат числа

        if (isPalindrome(i) && isPalindrome(square) && i > 9) { //число i є паліндромом, його квадрат також є паліндромом і i є двозначним або більшим числом.
            // Перевіряємо, чи число та його квадрат є паліндромами
            result += `${i} (квадрат числа: ${square})<br>`;
        }
    }

    if (result === "") {
        result = "У вказаному діапазоні не знайдено жодного числа паліндромів, квадрати яких також є паліндромами.";
    }

    document.getElementById('result_4').innerHTML = result;
}