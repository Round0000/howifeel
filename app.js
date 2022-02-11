document.querySelector("body").style.height = window.innerHeight + "px";

ui_form.addEventListener("submit", (e) => {
  e.preventDefault();

  storeValue(e.target.evaluation.value, Date.now());

  document.querySelectorAll("tbody").forEach((table) => {
    displayChart(table);
  });

  container.classList.add("move");
});

ui_show_charts.addEventListener("click", (e) => {
  container.classList.add("movehigher");
});

function storeValue(val, date) {
  date = new Date(date);
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  date = date.getDate() + "." + month + "." + date.getFullYear();
  data.push({ value: val, date: date });
}

const data = [];

function displayChart(table) {
  let prevPoint = data[0].value / 100;

  data.forEach((item) => {
    const tr = document.createElement("TR");
    tr.innerHTML = `
  <td style="--start: ${prevPoint}; --size: ${
      item.value / 100
    }"> <span class="data"> ${item.date} </span> </td>
    `;
    prevPoint = item.value / 100;
    table.append(tr);
  });
}

// Chart display style
let currDisplayStyle = "Area";

charts_style_options.addEventListener("click", (e) => {
  if (e.target.innerText === "Area") {
    chart_area.classList.remove("hidden");
    chart_line.classList.add("hidden");
  } else if (e.target.innerText === "Line") {
    chart_line.classList.remove("hidden");
    chart_area.classList.add("hidden");
  }
});

reset_app.addEventListener("click", (e) => {
  window.location.reload();
});
