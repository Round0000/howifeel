// ui_form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (e.target.evaluation.value.length === 0) return;

//   const obj = {};

//   [obj.evaluation, obj.comment] = [
//     e.target.evaluation.value,
//     e.target.comment.value,
//   ];

//   console.table(obj);
//   updateUIstats(obj);
// });

// function updateUIstats(obj) {
//   const list = ui_stats.querySelector("ul");
//   const item = document.createElement("LI");
//   item.innerText = `10/02 - ${obj.evaluation}`;
//   list.append(item);
// }

ui_form.addEventListener("submit", (e) => {
  e.preventDefault();

  storeValue(e.target.evaluation.value, Date.now());
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
    date: "11.02.2022",
    value: 15,
  },
  {
    date: "12.02.2022",
    value: 36,
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
    value: 82,
  },
  {
    date: "20.02.2022",
    value: 90,
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
];

const tableBody = chart.querySelector("tbody");

let prevPoint = data[0].value / 100;

data.forEach((item) => {
  const tr = document.createElement("TR");
  tr.innerHTML = `
  <td style="--start: ${prevPoint}; --size: ${
    item.value / 100
  }"> <span class="data"> ${item.date} </span> </td>
    `;
  prevPoint = item.value / 100;
  tableBody.append(tr);
});
