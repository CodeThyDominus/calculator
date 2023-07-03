function Digit(digit) {
    var result = document.getElementById('result');
    result.value += digit;
}

function Operator(operator) {
    var result = document.getElementById('result');
    var lastChar = result.value.slice(-1);

    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
        result.value += operator;
    }
}


function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
}

function deleteDigit() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculate() {
    var result = document.getElementById('result');
    var calcHistory = document.getElementById('calcHistory');
    var calculation = result.value;
    try {
        result.value = eval(calculation);
        // Adding calculation to history
        var listItem = document.createElement('li');
        listItem.textContent = calculation + ' = ' + result.value;
        calcHistory.appendChild(listItem);
    } catch (error) {
        result.value = 'Error';
    }
}