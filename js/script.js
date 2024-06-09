document.getElementById('calculateButton').addEventListener('click', function () {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
        document.getElementById('resultScreen').innerText = 'Please enter a valid number.';
        return;
    }
    const result = factorial(number);
    document.getElementById('resultScreen').innerText = `${result}`;
});

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}