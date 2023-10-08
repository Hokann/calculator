function displayExpression(text){
    const equation = document.querySelector('.equation');
    equation.innerText += text;
    return equation.innerText;
}

function evaluate(string){
    
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



        if (button.className.includes('equal')){
            evaluate(expression);
        }

    });

});




