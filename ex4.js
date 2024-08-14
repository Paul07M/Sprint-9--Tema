// Scrieți o funcție pentru a adăuga numere nelimitate

// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

// Exemplu 1:

// Input: addNumber(1, 2, 3)

// Output: 6

function addNumber(...numbers) {

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
}

console.log(addNumber(2, 5, 8, 12, 5));