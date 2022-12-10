"use strict";

const engAlphabet = "abcdefghijklmnopqrstuvwxyz";
const numEngAlph = {};

for(let i = 0; i < engAlphabet.length;i++) {
    numEngAlph[engAlphabet[i]] = i;
}
console.log(numEngAlph);

const ruAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const numRuAlph = {};

for(let i = 0; i < ruAlphabet.length;i++) {
    numRuAlph[ruAlphabet[i]] = i;
}
console.log(numRuAlph);



document.querySelector("#btnEncrypt").onclick = Encrypt;
document.querySelector("#btnDecrypt").onclick = Decrypt;



function Encrypt() {
    console.log("Нажата кнопка шифрования");

    // Пустая строка, в которую записывается зашифрованный текст и сообщения об ошибках
    let output = '';

    let lang = 0;
    // Русский - 1
    // Английский - 2

    if(document.querySelector('.lang_rus').checked) {

        lang = document.querySelector('.lang_rus').value;
            
        console.log( `lang = ${Number(lang)}`);
    }
    else if(document.querySelector('.lang_eng').checked) {

        lang = document.querySelector('.lang_eng').value;
            
        console.log( `lang = ${Number(lang)}`);
    }

    if(lang == 0) {
        output = "Не выбран язык ввода!";
        document.querySelector('.out').innerHTML = output;
        return;
    }

    if(lang == 1) {
        // Текст, полученый от пользователя
        let text = document.querySelector('.user_text').value.toLowerCase();
        console.log("Текст пользователя: ", text);

        // Считываем значение ключа
        let key = document.querySelector(".i-1").value.toLowerCase();
        console.log("Значение ключа: ", key);

        // Проверка ключа на наличие сторонних символов:
        let keyCounter = 0;

        for(let i = 0; i < key.length; i++) {
            for(let j = 0; j < ruAlphabet.length;j++) {
                if(key[i] == ruAlphabet[j]) {
                    keyCounter = keyCounter + 1;
                }
            }
        }
        if(keyCounter != key.length) {
            output = "В ключе найдены посторонние символы!";
            document.querySelector('.out').innerHTML = output;
            return;
        }

        // Алгоритм шифра
        for(let i = 0; i < text.length;i++) {
            let flag = 0
            for(let j = 0; j < ruAlphabet.length;j++) {
                if(text[i] == ruAlphabet[j]) {
                    flag = 1;
                }
            }
            // Делать проверку, есть ли символ в алфавите, и шифровать только буквы
            if(flag == 1) {
                output += ruAlphabet[(numRuAlph[text[i]] + numRuAlph[key[i % key.length]]) % ruAlphabet.length];
            }
            else{
                // Если это не буква, просто добавляем в символ в текст.
                output += text[i];
            }
        }
        // Вывод зашифрованного сообщения.
        document.querySelector('.out').innerHTML = output;
    }   
    

    if(lang == 2) {
        // Текст, полученый от пользователя
        let text = document.querySelector('.user_text').value.toLowerCase();
        console.log("Текст пользователя: ", text);

        // Считываем значение ключа
        let key = document.querySelector(".i-1").value.toLowerCase();
        console.log("Значение ключа: ", key);

        // Проверка ключа на наличие сторонних символов:
        let keyCounter = 0;

        for(let i = 0; i < key.length; i++) {
            for(let j = 0; j < engAlphabet.length;j++) {
                if(key[i] == engAlphabet[j]) {
                    keyCounter = keyCounter + 1;
                }
            }
        }
        if(keyCounter != key.length) {
            output = "В ключе найдены посторонние символы!";
            document.querySelector('.out').innerHTML = output;
            return;
        }

        // Алгоритм шифра
        for(let i = 0; i < text.length;i++) {
            let flag = 0
            for(let j = 0; j < engAlphabet.length;j++) {
                if(text[i] == engAlphabet[j]) {
                    flag = 1;
                }
            }
            // Делать проверку, есть ли символ в алфавите, и шифровать только буквы
            if(flag == 1) {
                output += engAlphabet[(numEngAlph[text[i]] + numEngAlph[key[i % key.length]]) % engAlphabet.length];
            }
            else{
                // Если это не буква, просто добавляем в символ в текст.
                output += text[i];
            }
        }
        // Вывод зашифрованного сообщения.
        document.querySelector('.out').innerHTML = output;
    }   
} 


function Decrypt(text, key) {
    console.log("Нажата кнопка расшифровки");

    // Пустая строка, в которую записывается расшифрованный текст и сообщения об ошибках
    let output = '';
    
    let lang = 0;
    // Русский - 1
    // Английский - 2

    if(document.querySelector('.lang_rus').checked) {

        lang = document.querySelector('.lang_rus').value;
            
        console.log( `lang = ${Number(lang)}`);
    }
    else if(document.querySelector('.lang_eng').checked) {

        lang = document.querySelector('.lang_eng').value;
            
        console.log( `lang = ${Number(lang)}`);
    }

    if(lang == 0) {
        output = "Не выбран язык ввода!";
        document.querySelector('.out').innerHTML = output;
        return;
    }

    if(lang == 1) {
        // Текст, полученый от пользователя
        let text = document.querySelector('.user_text').value.toLowerCase();
        console.log("Текст пользователя: ", text);

        // Считываем значение ключа
        let key = document.querySelector(".i-1").value.toLowerCase();
        console.log("Значение ключа: ", key);

        // Проверка ключа на наличие сторонних символов:
        let keyCounter = 0;

        for(let i = 0; i < key.length; i++) {
            for(let j = 0; j < ruAlphabet.length;j++) {
                if(key[i] == ruAlphabet[j]) {
                    keyCounter = keyCounter + 1;
                }
            }
        }
        if(keyCounter != key.length) {
            output = "В ключе найдены посторонние символы!";
            document.querySelector('.out').innerHTML = output;
            return;
        }

        // Алгоритм шифра
        for(let i = 0; i < text.length;i++) {
            let flag = 0
            for(let j = 0; j < ruAlphabet.length;j++) {
                if(text[i] == ruAlphabet[j]) {
                    flag = 1;
                }
            }
            // Делать проверку, есть ли символ в алфавите, и шифровать только буквы
            if(flag == 1) {
                output += ruAlphabet[(numRuAlph[text[i]] - numRuAlph[key[i % key.length]] + ruAlphabet.length) % ruAlphabet.length];
            }
            else{
                // Если это не буква, просто добавляем в символ в текст.
                output += text[i];
            }
        }
        // Вывод зашифрованного сообщения.
        document.querySelector('.out').innerHTML = output;
    }   
    

    if(lang == 2) {
        // Текст, полученый от пользователя
        let text = document.querySelector('.user_text').value.toLowerCase();
        console.log("Текст пользователя: ", text);

        // Считываем значение ключа
        let key = document.querySelector(".i-1").value.toLowerCase();
        console.log("Значение ключа: ", key);

        // Проверка ключа на наличие сторонних символов:
        let keyCounter = 0;

        for(let i = 0; i < key.length; i++) {
            for(let j = 0; j < engAlphabet.length;j++) {
                if(key[i] == engAlphabet[j]) {
                    keyCounter = keyCounter + 1;
                }
            }
        }
        if(keyCounter != key.length) {
            output = "В ключе найдены посторонние символы!";
            document.querySelector('.out').innerHTML = output;
            return;
        }

        // Алгоритм расшифровки
        for(let i = 0; i < text.length;i++) {
            let flag = 0
            for(let j = 0; j < engAlphabet.length;j++) {
                if(text[i] == engAlphabet[j]) {
                    flag = 1;
                }
            }
            // Делать проверку, есть ли символ в алфавите, и дешифровать только буквы
            if(flag == 1) {
                output += engAlphabet[(numEngAlph[text[i]] - numEngAlph[key[i % key.length]] + engAlphabet.length) % engAlphabet.length];
            }
            else{
                // Если это не буква, просто добавляем в символ в текст.
                output += text[i];
            }
        }
        // Вывод дешифрованного сообщения.
        document.querySelector('.out').innerHTML = output;
    }   
}