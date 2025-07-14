let Result = document.getElementById('result');

function insertValue(value) {
    Result.value += value;
}

function cleartheResult() {
    Result.value = '';
}

function deletetheResult() {
    Result.value = Result.value.slice(0, -1);
}

function calculatetheResult() {
    try {

        Result.value = eval(Result.value);
    } catch (error) {
        Result.value = "error";
    }
}


document.addEventListener("keydown", function (e) {
    const key = e.key;


    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '+', '-', '*', '/', '.', '%'];

    if (validKeys.includes(key)) {
        insertValue(key);
    } else if (key === 'Enter') {
        calculatetheResult();
        e.preventDefault();
    } else if (key === 'Backspace') {
        deletetheResult();
        e.preventDefault();
    } else if (key === 'Escape') {
        cleartheResult();
        e.preventDefault();
    }
});