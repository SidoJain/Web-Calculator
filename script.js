let input = document.getElementById('inputBox');
let bottons = document.querySelectorAll('button');
const EN = 2.71828;
const PI = 3.14159;

let arr = Array.from(bottons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (input.value != '') {
            if ('x ÷ ^ %'.includes(e.target.innerHTML) && !input.value.endsWith(' ') && !input.value.endsWith('('))
                input.value += ' ' + e.target.innerHTML + ' ';
            else if ('+ -'.includes(e.target.innerHTML))
                input.value += ' ' + e.target.innerHTML;
            else if ('eπ'.includes(e.target.innerHTML) && !'x÷%^1234567890eπ'.includes(input.value.charAt(input.value.length - 1)))
                input.value += e.target.innerHTML;
            else if ((e.target.innerHTML === '(' && !'0123456789eπ)'.includes(input.value.charAt(input.value.length - 1))) || (e.target.innerHTML === ')' && !'+-( '.includes(input.value.charAt(input.value.length - 1))))
                input.value += e.target.innerHTML;
            else if (e.target.innerHTML === '.' && !'eπ)'.includes(input.value.charAt(input.value.length - 1))) {
                let _temp = input.value.split(' ');
                if (!_temp[_temp.length-1].includes('.'))
                    input.value += e.target.innerHTML;
            }
            else if ('0123456789'.includes(e.target.innerHTML) && !'eπ)'.includes(input.value.charAt(input.value.length - 1)))
                input.value += e.target.innerHTML;
            else if (e.target.innerHTML === 'AC')
                input.value = '';
            else if (e.target.innerHTML === 'DEL') {
                if (input.value.endsWith('NaN'))
                    input.value = input.value.substring(0, input.value.length - 3);
                else if (input.value.endsWith('-Infinity'))
                    input.value = input.value.substring(0, input.value.length - 9);
                else if (input.value.endsWith('Infinity'))
                    input.value = input.value.substring(0, input.value.length - 8);
                else if (input.value.endsWith(' '))
                    input.value = input.value.substring(0, input.value.length - 3);
                else if (input.value.endsWith('+') || input.value.endsWith('-'))
                    input.value = input.value.substring(0, input.value.length - 2);
                else
                    input.value = input.value.substring(0, input.value.length - 1);
            }
            else if (e.target.innerHTML === '=') {
                input.value = eval(input.value.replaceAll('^', '**').replaceAll('x', '*').replaceAll('÷', '/').replaceAll('e', `${EN}`).replaceAll('π', `${PI}`));
                input.value = parseFloat(input.value).toPrecision(4);
            }
        }
        else
            if ('0123456789-.(eπ'.includes(e.target.innerHTML))
                input.value = e.target.innerHTML;
    })
})