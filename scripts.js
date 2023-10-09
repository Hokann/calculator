function displayResult(text){
    const result = document.querySelector('.result');
    
    if (result.innerText === '0') result.innerHTML = '';
    if (!isNaN(text) || text === '.'){
        result.innerHTML += text;
    }
    if (expression.length >= 1 && digits.length <= 1) result.innerHTML = text;
    if (text === 'CLEAR') result.innerText = '0'

    if (result.innerText.length > 12) result.innerText = result.innerText.slice(0,12);
    return result.innerText;
}

function evaluate2(arr){
    let operator = arr[1];
    switch(operator){
        case '+':
            arr.splice(0,3,(Number(arr[0])+Number(arr[2]))) //is its own array (and modifies original arr)
            return arr; //returns modified array
        case '-':
            arr.splice(0,3,((arr[0]-arr[2])));
            return arr;
        case 'x':
            arr.splice(0,3,(arr[0]*arr[2]));
            return arr;
        case '/':
            arr.splice(0,3,(arr[0]/arr[2]));
            return arr;
        case '%':
            arr.splice(0,3,(Number(arr[0]) % Number(arr[2])));
            return arr;

    }
}

const specialBtns = Array.from(document.querySelectorAll('.special'));
let digits = [];
let expression = [];
let num = '';

specialBtns.forEach((specialBtn) => {
    specialBtn.addEventListener('click', () => {

        if(specialBtn.className.includes('ac')){
            expression = []; digits = []; num = '';
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
        if (!(digitBtn.innerText === '.' && digits.includes('.'))){
            digits[i] = digitBtn.innerText;
            displayResult(digits[i]);
            i += 1;
        }
        num = digits.join('');
        console.log(digits)
        console.log(num)
    });
});