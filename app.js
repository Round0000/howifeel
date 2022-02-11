ui_form.addEventListener("submit", (e) => {
  e.preventDefault();

  storeValue(e.target.evaluation.value, Date.now());

  displayChart(tableBody1);
  displayChart(tableBody2);

  ui_form.classList.add("move");
  ui_show_charts.classList.add("move");
});

ui_show_charts.addEventListener("click", (e) => {
  ui_show_charts.classList.add("movehigher");
  charts.classList.add("movehigher");
});

function storeValue(val, date) {
  date = new Date(date);
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  date = date.getDate() + "." + month + "." + date.getFullYear();
  console.table({ val, date });
}

const data = [
  {
    date: "01.02.2022",
    value: 32,
  },
  {
    date: "02.02.2022",
    value: 48,
  },
  {
    date: "03.02.2022",
    value: 99,
  },
  {
    date: "04.02.2022",
    value: 65,
  },
  {
    date: "05.02.2022",
    value: 10,
  },
  {
    date: "06.02.2022",
    value: 44,
  },
  {
    date: "07.02.2022",
    value: 15,
  },
  {
    date: "08.02.2022",
    value: 19,
  },
  {
    date: "09.02.2022",
    value: 25,
  },
  {
    date: "10.02.2022",
    value: 38,
  },
  {
    date: "11.02.2022",
    value: 85,
  },
  {
    date: "12.02.2022",
    value: 75,
  },
  {
    date: "13.02.2022",
    value: 32,
  },
  {
    date: "14.02.2022",
    value: 2,
  },
  {
    date: "15.02.2022",
    value: 7,
  },
  {
    date: "16.02.2022",
    value: 18,
  },
  {
    date: "17.02.2022",
    value: 66,
  },
  {
    date: "18.02.2022",
    value: 42,
  },
  {
    date: "19.02.2022",
    value: 72,
  },
  {
    date: "20.02.2022",
    value: 70,
  },
  {
    date: "21.02.2022",
    value: 65,
  },
  {
    date: "22.02.2022",
    value: 30,
  },
  {
    date: "23.02.2022",
    value: 36,
  },
  {
    date: "24.02.2022",
    value: 22,
  },
  {
    date: "25.02.2022",
    value: 88,
  },
  {
    date: "25.02.2022",
    value: 100,
  },
  {
    date: "26.02.2022",
    value: 71,
  },
  {
    date: "27.02.2022",
    value: 32,
  },
  {
    date: "28.02.2022",
    value: 50,
  },
];

const tableBody1 = chart.querySelector("tbody");
const tableBody2 = chart2.querySelector("tbody");

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
