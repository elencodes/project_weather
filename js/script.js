const cities = [`Лондон`, `Токио`, `Флоренция`, `Шанхай`];

const temperatures = [];

for (let i = 0; i < cities.length; i++) {
	temperatures.push(Number(prompt(`Введите температуру для города: ${cities[i]}`)));
}

const maxValue = Math.max.apply(null, temperatures);
const minValue = Math.min.apply(null, temperatures);

console.log(maxValue);
console.log(minValue);