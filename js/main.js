// функция которая выводит значения на экран
function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

// функция очистки
function clean() {
  document.form.textview.value = "";
}

// функция которая удаляет последнюю цифру
function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

// функция для того чтоб складывались числа
function equal() {
  var exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}
