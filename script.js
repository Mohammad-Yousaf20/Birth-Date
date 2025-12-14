// Fill Day options
const daySelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    daySelect.appendChild(opt);
}

// Fill Month options
const monthSelect = document.getElementById("month");
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
months.forEach((m, index) => {
    let opt = document.createElement("option");
    opt.value = index + 1;
    opt.textContent = m;
    monthSelect.appendChild(opt);
});

// Fill Year options (1950 - Current Year)
const yearSelect = document.getElementById("year");
let currentYear = new Date().getFullYear();

for (let y = currentYear; y >= 1950; y--) {
    let opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
}

function updateDOB() {
    const d = daySelect.value;
    const m = monthSelect.value;
    const y = yearSelect.value;

    const error = document.getElementById("error");
    const finalDob = document.getElementById("finalDob");

    if (!d || !m || !y) {
        finalDob.value = "";
        error.textContent = "Please select full date of birth";
        return;
    }

    error.textContent = "";
    finalDob.value = `${d} - ${m} - ${y}`;
}

daySelect.addEventListener("change", updateDOB);
monthSelect.addEventListener("change", updateDOB);
yearSelect.addEventListener("change", updateDOB);
