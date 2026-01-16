// Lista de alimentos iniciales (ejemplo, agregar hasta 200)
const foods = [
  {name: "Huevo", preparation: "Hervido", protein: 6, fat: 5, carbs: 1, calories: 70},
  {name: "Pollo", preparation: "Plancha", protein: 24, fat: 2, carbs: 0, calories: 110},
  {name: "Papa", preparation: "Hervida", protein: 2, fat: 0, carbs: 17, calories: 80},
  {name: "Arroz", preparation: "Hervido", protein: 2, fat: 0, carbs: 28, calories: 130},
  {name: "Carne de res", preparation: "Plancha", protein: 26, fat: 10, carbs: 0, calories: 200},
  {name: "Leche", preparation: "Natural", protein: 3, fat: 3, carbs: 5, calories: 60},
  {name: "Banana", preparation: "Natural", protein: 1, fat: 0, carbs: 23, calories: 90},
  {name: "Chicha morada", preparation: "Tradicional", protein: 0, fat: 0, carbs: 25, calories: 100},
  {name: "Jugó de mango con limón y estevia", preparation: "Bebida", protein: 0, fat: 0, carbs: 28, calories: 110},
  {name: "Filete de pescado", preparation: "Plancha", protein: 22, fat: 2, carbs: 0, calories: 110},
  // ... agrega los demás hasta 200
];

let dailyLog = [];

// Mostrar alimentos
function displayFoods(list) {
  const container = document.getElementById("food-list");
  container.innerHTML = "";
  list.forEach(food => {
    const div = document.createElement("div");
    div.className = "food-item";
    div.innerHTML = `<strong>${food.name}</strong> (${food.preparation})<br>
                     Proteínas: ${food.protein}g | Grasas: ${food.fat}g | Carbs: ${food.carbs}g | Calorías: ${food.calories}`;
    container.appendChild(div);
  });
}

// Filtrar por búsqueda
document.getElementById("search").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = foods.filter(f => f.name.toLowerCase().includes(query));
  displayFoods(filtered);
});

// Cambiar de sección
function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Guardar ajustes del usuario
function saveUserData() {
  const weight = document.getElementById("user-weight").value;
  const height = document.getElementById("user-height").value;
  const age = document.getElementById("user-age").value;
  const sex = document.getElementById("user-sex").value;
  const data = {weight, height, age, sex};
  localStorage.setItem("userData", JSON.stringify(data));
  alert("Datos guardados!");
}

// Función objetivo Definición/Volumen
function setGoal(goal) {
  const result = document.getElementById("goal-result");
  if(goal === "definicion") {
    result.innerHTML = "Objetivo: Definición → Calorías ligeramente por debajo, más proteínas.";
  } else {
    result.innerHTML = "Objetivo: Volumen → Calorías ligeramente por encima, balance de macros.";
  }
}

// Recetas combinadas
function calculateRecipe() {
  // Ejemplo: suma todos los alimentos (en la app real puedes seleccionar)
  let totalProtein = 0, totalFat = 0, totalCarbs = 0, totalCalories = 0;
  foods.forEach(f => {
    totalProtein += f.protein;
    totalFat += f.fat;
    totalCarbs += f.carbs;
    totalCalories += f.calories;
  });
  document.getElementById("recipe-result").innerHTML =
    `Macros totales: Proteínas ${totalProtein}g | Grasas ${totalFat}g | Carbs ${totalCarbs}g | Calorías ${totalCalories}`;
}

// Registro de comidas
function addToDailyLog(food) {
  dailyLog.push(food);
  updateDailyLog();
}

function updateDailyLog() {
  const container = document.getElementById("daily-log");
  container.innerHTML = dailyLog.map(f => `${f.name} (${f.preparation}) - ${f.calories} cal`).join("<br>");
}

function clearLog() {
  dailyLog = [];
  updateDailyLog();
}

// Mostrar alimentos al inicio
displayFoods(foods);
Crear script.js con lógica de alimentos, búsqueda, recetas y objetivos
