
const workouts = [
  {name: "Push-ups", level: "Beginner", equipment: "None", food: "Protein"},
  {name: "Squats", level: "Intermediate", equipment: "None", food: "Carbs"},
  {name: "Deadlift", level: "Advanced", equipment: "Barbell", food: "Protein"},
  {name: "Plank", level: "Beginner", equipment: "None", food: "None"}
];

const tableBody = document.getElementById("workoutTable");
workouts.forEach(w => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${w.name}</td><td>${w.level}</td><td>${w.equipment}</td><td>${w.food}</td>`;
  tableBody.appendChild(row);
});



