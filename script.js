//example 1

let ex1_minute = 59;

if(ex1_minute > 0 && ex1_minute <= 15){
    console.log(`${ex1_minute} - это первая четверть часа`);
}

else if(ex1_minute > 15 && ex1_minute <= 30){
    console.log(`${ex1_minute} - это вторая четверть часа`);
}

else if(ex1_minute > 30 && ex1_minute <= 45){
    console.log(`${ex1_minute} - это третья четверть часа`);
}

else if(ex1_minute > 45 && ex1_minute <= 59){
    console.log(`${ex1_minute} - это четвёртая четверть часа`);
};


//example 2

let ex2_lang = 'ru', ex2_arr;

if(ex2_lang === 'ru'){
    ex2_arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
else{
    ex2_arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}

console.log(`Для языка ${ex2_lang}, дни недели: ${ex2_arr}`);


//example 3

let ex3_input, ex3_count, ex3_type;

ex3_input = prompt('Введите ваше число:');

if(Number(ex3_input) > 0){
    ex3_type = 'положительное';
    if(ex3_input.length > 0 && ex3_input.length < 1){
        ex3_count = 'однозначное';
    }
    else if(ex3_input.length >= 2 && ex3_input.length < 3){
        ex3_count = 'двузначное';
    }
    else{
        ex3_count = 'трехзначное или больше';
    };
}

else{
    ex3_type = 'отрицательное';
    if(ex3_input.length > 0 && ex3_input.length <= 2){
        ex3_count = 'однозначное';
    }
    else if(ex3_input.length > 2 && ex3_input.length <= 3){
        ex3_count = 'двузначное';
    }

    else{
        ex3_count = 'трехзначное или больше';
    };
};


console.log(`Число ${ex3_input} ${ex3_type} ${ex3_count}`);


//example 4

let ex4_colorRed = 'no', ex4_colorYellow = 'no', ex4_colorGreen;

if(ex4_colorRed === 'no' && ex4_colorYellow === 'no'){
    ex4_colorGreen = 'yes';
}

else{
    ex4_colorGreen = 'no';
};

if(ex4_colorGreen === 'yes'){
    console.log(`Горит зелёный свет светофора, можно переходить дорогу`);
};


//example 5

let ex5_num1to12 = 0;

while(ex5_num1to12 < 12){
    ex5_num1to12++;
    console.log(`${ex5_num1to12}`);
};


//example 6

let ex6_num5to13 = 4;

while(ex6_num5to13 >= 4 && ex6_num5to13 < 13){
    ex6_num5to13++;
    console.log(`${ex6_num5to13}`);
};


//example 7

let ex7_evenNum = 0;

while(ex7_evenNum >= 0 && ex7_evenNum <= 16){
    if(ex7_evenNum % 2 === 0){
        console.log(`Чётные числа на промежутке от 0 до 16: ${ex7_evenNum}`);
    }
    ex7_evenNum++;
};


//example 8

let ex8_sumOfArray = 0, ex8_array = [2, 5, 8, 3, 6];

for(let i = 0; i < ex8_array.length; i++){
    ex8_sumOfArray = ex8_sumOfArray + ex8_array[i];
};

console.log(`Сумма чисел ${ex8_array} = ${ex8_sumOfArray}`);