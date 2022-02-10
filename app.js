ui_form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.evaluation.value.length === 0) return;

  const obj = {};

  [obj.evaluation, obj.comment] = [
    e.target.evaluation.value,
    e.target.comment.value,
  ];

  console.table(obj);
});
