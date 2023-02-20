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

const textArea1 = document.getElementById('floatingTextarea1')
const textArea2 = document.getElementById('floatingTextarea2')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let result = 'Результат щифрации: '

document.getElementById('select').addEventListener('change', function() {
	const shift = this.value;
	button1.onclick = function() {
		for (let i of textArea1.value) {
			let place = alphabet.indexOf(i)
			console.log(i, 'place =', place)
			let newPlace = place + Number(shift)
			console.log(i, 'new_place =', newPlace)
				if (alphabet.includes(i)) {
					result = result + alphabet[newPlace]
				} else {
					result = result + ' '
				}
			}
			textArea2.value = result
		}
	}
)
