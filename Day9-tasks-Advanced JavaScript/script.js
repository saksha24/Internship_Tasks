
let count = 0;

const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");
const countDisplay = document.getElementById("count");

clickBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = String(count);
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = String(count);
});

const userForm = document.getElementById("userForm");
const result = document.getElementById("result");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    result.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = "Registration Successful!";

    const nameText = document.createElement("p");
    nameText.textContent = "Name: " + name;

    const emailText = document.createElement("p");
    emailText.textContent = "Email: " + email;

    result.append(heading, nameText, emailText);
    result.hidden = false;
});

function updateDateTime() {
    document.getElementById("dateTime").textContent =
        new Date().toLocaleString();
}

document.getElementById("refreshBtn")
    .addEventListener("click", updateDateTime);

updateDateTime();
setInterval(updateDateTime, 1000);
