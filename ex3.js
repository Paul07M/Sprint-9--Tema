// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

// Exemplu 1:

// Input: sir = “Îmi place programarea” litera = “a”

// Output: 4

//Model 1

function letterCount(str) {

    str = str.toLowerCase();
    const letter = "a";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const el = str[i];

        if (letter.includes(el)) {
            count++;
        }
    }
    return count;
}

let str = "Vreau sa am o cariera in programare."

console.log("Aparitia literei (a) din acest strign:\n" + str + "\nEste de " + letterCount(str) + " ori.");

//Model2

function letterCount1(str1, letter1) {

    letter1 = letter1.toLowerCase();
    let count1 = 0;

    for (let char1 of str1) {
        if (char1.toLowerCase() === letter1) {
            count1++;
        }
    }

    return count1;
}

let str1 = "Incerc sa invat programare";
console.log("Aparitia literei (a) este de " + letterCount1("Incerc sa invat programare", "a") + " ori.");