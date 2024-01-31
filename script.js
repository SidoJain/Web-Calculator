let input = document.getElementById('inputBox');
let bottons = document.querySelectorAll('button')

let string = '';
let arr = Array.from(bottons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(string != ''){
            if(e.target.innerHTML == '^'){
                string += ' ** ';
                input.value += ' ^ ';
            }
            else if(e.target.innerHTML == 'x'){
                string += ' * ';
                input.value += ' x ';
            }
            else if(e.target.innerHTML == '÷'){
                string += ' / ';
                input.value += ' ÷ ';
            }
            else if(e.target.innerHTML == '='){
                string = eval(string);
                input.value = string;
            }
            else if(e.target.innerHTML == 'AC'){
                string = '';
                input.value = string;
            }
            else if(e.target.innerHTML == '&lt;='){
                if(string.charAt(string.length - 1) == ' ')
                    string = string.substring(0, string.length - 1);
                if(string.charAt(string.length - 1) == '*' && string.charAt(string.length - 2) == '*')
                    string = string.substring(0, string.length - 2);
                string = string.substring(0, string.length - 1);
                if(string == ' ')
                    string = '';
                input.value = string.replace('**', '^').replace('*', 'x').replace('/', '÷');
            }
            else if(e.target.innerHTML == '%' || e.target.innerHTML == '+' || e.target.innerHTML == '-'){
                string += ' ' + e.target.innerHTML + ' ';
                input.value += ' ' + e.target.innerHTML + ' ';
            }
            else{
                if(e.target.innerHTML == '.'){
                    temp = string.split(' ');
                    let count = 0;
                    for (let i = 0; i < temp[temp.length-1].length; i++){
                        if(temp[temp.length-1].charAt(i) == '.'){
                            count++;
                            break;
                        }
                    }
    
                    if(count == 0){
                        string += e.target.innerHTML;
                        input.value += e.target.innerHTML;
                    }
                }
                else{
                string += e.target.innerHTML;
                input.value += e.target.innerHTML;
                }
            }
        }
        else{
            if(e.target.innerHTML == '.'){
                temp = string.split(' ');
                let count = 0;
                for (let i = 0; i < temp[temp.length-1].length; i++){
                    if(temp[temp.length-1].charAt(i) == '.'){
                        count++;
                        break;
                    }
                }

                if(count == 0){
                    string += e.target.innerHTML;
                    input.value += e.target.innerHTML;
                }
            }
            else if(e.target.innerHTML != '%' && e.target.innerHTML != '+' && e.target.innerHTML != '-' && e.target.innerHTML != 'x' && e.target.innerHTML != '÷' && e.target.innerHTML != '^' && e.target.innerHTML != 'AC' && e.target.innerHTML != '&lt;='){
            string += e.target.innerHTML;
            input.value += e.target.innerHTML;
            }
        }
    })
})