function displayResult(text){
    const result = document.querySelector('.result');
    result.innerText = text;
    if (text === 'CLEAR') result.innerText = '';
    return result.innerText;
}

function displayExpression(text){
    const equation = document.querySelector('.equation');
    equation.innerText += text;
    if (text === 'CLEAR') equation.innerText = '';
    return equation.innerText;
}

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

const buttons = Array.from(document.querySelectorAll('button'));
let expression = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button);
        
        if (button.className.includes('normal')){
            expression = displayExpression(button.innerText);
        }
        console.log(expression);

        if(button.className.includes('ac')){
            displayExpression('CLEAR');
            displayResult('CLEAR');
        }



        if (button.className.includes('equal')){
            let result = evaluate(expression);
            displayResult(result);
        }

    });

});



a = '123x123y';
const operators = ['+', '-', '/', 'x']

a.split('').forEach((char) => {
    console.log(char)
    switch(char){
        case 'x': 
            console.log('has x');
    }
})
