// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// let shift = +prompt('Выберите сдвиг')
// let msg = prompt('Ваше сообщение:')
// console.log(msg)
// let result = 'Результат щифрации: '
// let deResult = 'Результат дешифрации: '

// for (let i of msg) {
// 	let place = alphabet.indexOf(i)
// 	console.log(i, 'place =', place)
// 	let newPlace = place + shift
// 	console.log(i, 'new_place =', newPlace)
// 	if (alphabet.includes(i)) {
// 		result = result + alphabet[newPlace]
// 	} else {
// 		result = result + ' '
// 	}
// }
// alert(result)
// alert('Проводим дешифрацию')
// let deMsg = prompt('Введите результат шифрации:')

// for (let b of deMsg) {
// 	let dePlace = alphabet.indexOf(b)
// 	let newDePlace = dePlace - shift
// 	if (alphabet.includes(b)) {
// 		deResult = deResult + alphabet[newDePlace]
// 	} else {
// 		deResult = deResult + ' '
// 	}
// }
// alert(deResult)

const textArea1 = document.getElementById("floatingTextarea1"); // good
const textArea2 = document.getElementById("floatingTextarea2"); // good
const button1 = document.getElementById("button1"); //good
const button2 = document.getElementById("button2"); // good
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]; // you can use format
let result = "Результат щифрации: ";

// почему не вынести select в переменную?

document.getElementById("select").addEventListener("change", function () {
  const shift = this.value; // такая конструкция слегка устаревшая. Но пока норм
  button1.onclick = function () {
    for (let i of textArea1.value) {
      // for of тоже многими ненавидим. Используйте лучше обычный for с split('')
      let place = alphabet.indexOf(i);
      // console.log(i, 'place =', place)
      let newPlace = place + Number(shift);
      // console.log(i, 'new_place =', newPlace)
      if (alphabet.includes(i)) {
		// маленький костыль
        if (newPlace > alphabet.length - 1) {
          newPlace = newPlace - alphabet.length;
        }
        result = result + alphabet[newPlace];
      } else {
        result = result + " ";
      }
    }
    textArea2.value = result;
    // input потом не очищается, текст наслаивается
  };
});
