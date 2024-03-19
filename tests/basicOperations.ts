//console.log('Hello World')

const number1: number = 10

let number2: number = 20


// odejmowanie

let odejmowanie = number2 - number1
console.log('odejmowanie: ' + odejmowanie)

// mnożenie
let mnozenie = number2 * number1
console.log('mnozenie: ' + mnozenie)

//dodawanie stringow

let textTest:string = "Testy "
let textAuto:string = "Automatyczne"
const sumaText = textTest + textAuto
console.log(sumaText)

// tablica 
let arr = [1, 2, 3, 4]
console.log('tablica: ' + arr[2])

//Słownik
let car = {
    "kolor": "czerwony",
    "marka": "toyota"
}
console.log(car.kolor)


// Funkcja

function add(a: number, b: number): number {
    return a + b
}
let suma = add(4, 5)
console.log(suma)
