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

      const quote = item.quote?.USD;

      if (!quote) {
        jsonOutput.innerHTML = "<p>Нет данных о курсе.</p>";
        return;
      }

      jsonOutput.innerHTML = `
        <h2>${item.name} (${item.symbol})</h2>
        <p><strong>Цена:</strong> $${quote.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        <p><strong>Объём за 24ч:</strong> $${quote.volume_24h.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
        <p><strong>Капитализация:</strong> $${quote.market_cap.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
        <p><strong>Изменение за 24ч:</strong> ${quote.percent_change_24h.toFixed(2)}%</p>
        <p><strong>Циркулирующее предложение:</strong> ${item.circulating_supply.toLocaleString()}</p>
        <p><strong>Макс. предложение:</strong> ${item.max_supply?.toLocaleString() || "Неизвестно"}</p>
        <p><strong>Категории:</strong> ${item.tags?.map(tag => tag.name).join(", ")}</p>
      `;
    });

    nameList.appendChild(li);
  });
}

fetchData();
