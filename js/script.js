//1. Создаем массив городов cities
const cities = [`Лондон`, `Осло`, `Палермо`, `Шанхай`, `Токио`];

//2. Создаем пустой массив, который будет хранить температуры для каждого города
const temperatures = [];

//3. С помощью цикла, проходимся по массиву городов и просим пользователя ввести температуру для каждого города в диалоговом окне
for (let i = 0; i < cities.length; i++) {
	temperatures.push(Number(prompt(`Введите температуру для города: ${cities[i]}`)));
}

//4. Используем цикл для перебора элементов массива temperatures, чтобы создать новые элементы и добавить их в список для вывода получившихся значений
for (let i = 0; i < temperatures.length; i++) {
	//4.1 Ищем область списка в HTML документе для дальнейшего взаимодействия
	const userTemperatureValue = document.querySelector(`.list`);
	//4.2 Создаем новый элемент списка для отображения информации о городе и его температуре
	const listItem = document.createElement(`li`)
	//4.3 Наполняем элемент списка контентом
	//выводим каждый элемента массива c названием города и соответствующую ему температуру, которую указал пользователь
	listItem.textContent = `Температура в ${cities[i]}: ${temperatures[i]}°С`
	//4.4 Вставляем новый элемент списка внутрь и в начало общего списка
	userTemperatureValue.appendChild(listItem);
}

//5 Находим максимальную температуру из массива с температурами и выводим ее на экран
const maxTemperatureValue = Math.max(...temperatures);
const maxTemperature = document.querySelector(`#maxTemperature`)
maxTemperature.textContent = maxTemperatureValue;

//6 Находим минимальную температуру из массива с температурами и выводим ее на экран
const minTemperatureValue = Math.min(...temperatures);
const minTemperature = document.querySelector(`#minTemperature`)
minTemperature.textContent = minTemperatureValue;