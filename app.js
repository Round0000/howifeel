ui_form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.evaluation.value.length === 0) return;

  const obj = {};

  [obj.evaluation, obj.comment] = [
    e.target.evaluation.value,
    e.target.comment.value,
  ];

  console.table(obj);
  updateUIstats(obj);
});

function updateUIstats(obj) {
  const list = ui_stats.querySelector("ul");
  const item = document.createElement("LI");
  item.innerText = `10/02 - ${obj.evaluation}`;
  list.append(item);
}
