const apiUrl = "http://127.0.0.1:8000/currencies";

async function fetchData() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const nameList = document.getElementById("nameList");
  const jsonOutput = document.getElementById("jsonOutput");

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;

    li.addEventListener("click", () => {
      document.querySelectorAll("li").forEach(el => el.classList.remove("selected"));
      li.classList.add("selected");
      jsonOutput.textContent = JSON.stringify(item, null, 2);
    });

    nameList.appendChild(li);
  });
}

fetchData();
