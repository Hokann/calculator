function displayResult(text){
    const result = document.querySelector('.result');
    
    if (result.innerText === '0') result.innerHTML = '';
    if (!isNaN(text) || text === '.'){
        result.innerHTML += text;
    }
    if (expression.length >= 1 && digits.length <= 1) result.innerHTML = text;
    if (text === 'CLEAR') result.innerText = '0'
    return result.innerText;
}

function evaluate2(arr){
    let operator = arr[1];
    switch(operator){
        case '+':
            arr.splice(0,3,Number(arr[0])+Number(arr[2])) //is its own array (and modifies original arr)
            return arr; //returns modified array
        case '-':
            arr.splice(0,3,arr[0]-arr[2]);
            return arr;
        case 'x':
            arr.splice(0,3,arr[0]*arr[2]);
            return arr;
        case '/':
            arr.splice(0,3,arr[0]/arr[2]);
            return arr;
    }
}

const specialBtns = Array.from(document.querySelectorAll('.special'));
let digits = [];
let expression = [];
let num = '';

specialBtns.forEach((specialBtn) => {
    specialBtn.addEventListener('click', () => {
        console.log(specialBtn);

        if(specialBtn.className.includes('ac')){
            expression = [];
            digits = [];
            displayResult('CLEAR');
        }

        if (specialBtn.className.includes('equal')){
            expression.push(num);
            expression = evaluate2(expression);
            console.log(expression);
            digits = []; num = '';
            displayResult('CLEAR');
            displayResult(expression[0]);
        }        
    });
});


const operatorBtns = Array.from(document.querySelectorAll('.operator'));
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        i = 0;
        if (num !== '') expression.push(num);
        expression.push(operatorBtn.innerText)
        digits = [];
        console.log(expression);
        if (expression.length > 3){
            expression = evaluate2(expression);
            displayResult(expression[0]);
            console.log(expression);
        }
    });
});

const digitBtns = Array.from(document.querySelectorAll('.num'));
let i=0;
digitBtns.forEach((digitBtn) => {
    digitBtn.addEventListener('click', () => {
        digits[i] = digitBtn.innerText;
        displayResult(digits[i]);
        i += 1
        num = digits.join('');
        console.log(digits)
        console.log(num)
    });
});










function evaluate(string){
    const operators = ['+', '-', '/', 'x']
    
    let strArr = string.split('');
    let strExp = '';

    strArr.forEach((char) => {
        if (operators.includes(char)){
            strExp += ' '+char+' '
        }else{
            strExp += char;
        }
    });
    let arrExp = strExp.split(' ');
    
    return recursion(arrExp);

}


function recursion(arrExp){

    arrExp.forEach((element) => {
        switch(element){
            case 'x':
                opIndex = arrExp.indexOf('x');
                subResult = arrExp[opIndex-1]*arrExp[opIndex+1];
                arrExp.splice(opIndex-1, 3, subResult);
                return recursion(arrExp);
            case '/':
                opIndex = arrExp.indexOf('/');
                subResult = arrExp[opIndex-1]/arrExp[opIndex+1];
                arrExp.splice(opIndex-1, 3, subResult);
                return recursion(arrExp);
            case '+':
                opIndex = arrExp.indexOf('+');
                subResult = Number(arrExp[opIndex-1])+Number(arrExp[opIndex+1]);
                arrExp.splice(opIndex-1, 3, subResult);
                return recursion(arrExp);
            case '-':
                opIndex = arrExp.indexOf('-');
                subResult = arrExp[opIndex-1]-arrExp[opIndex+1];
                arrExp.splice(opIndex-1, 3, subResult);
                return recursion(arrExp);
        }
        
    })

    if (arrExp.length === 1) return arrExp.join('');
}