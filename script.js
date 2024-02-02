let input = document.getElementById('inputBox');
let bottons = document.querySelectorAll('button')

let arr = Array.from(bottons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(input.value != ''){
            if(e.target.innerHTML == '^')
                if(input.value.slice(-1) != ' ')
                    input.value += ' ^ ';
                else
                    input.value += '';
            else if(e.target.innerHTML == 'x')
                if(input.value.slice(-1) != ' ')
                    input.value += ' x ';
                else
                    input.value += '';
            else if(e.target.innerHTML == '÷')
                if(input.value.slice(-1) != ' ')
                    input.value += ' ÷ ';
                else
                    input.value += '';
            else if(e.target.innerHTML == '%')
                if(input.value.slice(-1) != ' ')
                    input.value += ' ' + e.target.innerHTML + ' ';
                else
                    input.value += '';
            else if(e.target.innerHTML == '+' || e.target.innerHTML == '-')
                input.value += ' ' + e.target.innerHTML + ' ';
            else if(e.target.innerHTML == 'AC')
                input.value = '';
            else if(e.target.innerHTML == '='){
                input.value = eval(input.value.replace('^', '**').replace('÷', '/').replace('x', '*')).toString();
                if(input.value.includes('e') || input.value.length > 6)
                    input.value = (Number.parseFloat(input.value)).toExponential(4);
                else
                    input.value = (Number.parseFloat(input.value)).toFixed(4);
            }
            else if(e.target.innerHTML == '&lt;='){
                if(input.value.slice(-1) == ' ')
                    input.value = input.value.substring(0, input.value.length - 1);
                if(input.value.slice(-1) == '^')
                    input.value = input.value.substring(0, input.value.length - 1);
                input.value = input.value.substring(0, input.value.length - 1);
                if(input.value == ' ')
                    input.value = '';
                input.value = input.value.replace('**', '^').replace('*', 'x').replace('/', '÷');
            }
            else{
                if(e.target.innerHTML == '.'){
                    temp = input.value.split(' ');
                    let count = 0;
                    for (let i = 0; i < temp[temp.length-1].length; i++){
                        if(temp[temp.length-1].charAt(i) == '.'){
                            count++;
                            break;
                        }
                    }
                    if(count == 0)
                        input.value += e.target.innerHTML;
                }
                else
                    input.value += e.target.innerHTML;
            }
        }
        else{
            if(e.target.innerHTML == '.'){
                temp = input.value.split(' ');
                let count = 0;
                for (let i = 0; i < temp[temp.length-1].length; i++){
                    if(temp[temp.length-1].charAt(i) == '.'){
                        count++;
                        break;
                    }
                }
                if(count == 0)
                    input.value += e.target.innerHTML;
            }
            else if(e.target.innerHTML != '%' && e.target.innerHTML != '+' && e.target.innerHTML != 'x' && e.target.innerHTML != '÷' && e.target.innerHTML != '^' && e.target.innerHTML != 'AC' && e.target.innerHTML != '&lt;=')
                input.value += e.target.innerHTML;
        }
    })
})