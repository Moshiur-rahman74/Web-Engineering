// ==========================
// Library Book Request – JS
// ==========================

const form = document.getElementById("requestForm");
const nameInput = document.getElementById("name");
const category = document.getElementById("category");
const titleInput = document.getElementById("title");
const summaryList = document.getElementById("summaryList");
const totalCount = document.getElementById("totalCount");
const btnReset = document.getElementById("btnReset");
const nameCounter = document.getElementById("nameCounter");

let count = 0;

// Live name character counter
nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 20)
    nameInput.value = nameInput.value.slice(0, 20);

  nameCounter.textContent = `${nameInput.value.length}/20 characters used`;
});

// Handle Request button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!nameInput.value.trim()) {
    alert("Please enter your name");
    return;
  }
  if (!category.value) {
    alert("Please select a category");
    return;
  }
  if (!titleInput.value.trim()) {
    alert("Please enter a book title");
    return;
  }

  count++;
  totalCount.textContent = count;

  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
    <strong>${nameInput.value}</strong><br>
    <span class="meta">Category: ${category.value}</span><br>
    <em>${titleInput.value}</em>
  `;

  summaryList.prepend(item);

  form.reset();
  nameCounter.textContent = "0/20 characters used";
});

// Reset button
btnReset.addEventListener("click", () => {
  summaryList.innerHTML = "";
  totalCount.textContent = "0";
  count = 0;
  form.reset();
  nameCounter.textContent = "0/20 characters used";
});

// Live time
function updateClock() {
  const now = new Date();
  document.getElementById("timeDisplay").textContent =
    "Current time: " +
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
