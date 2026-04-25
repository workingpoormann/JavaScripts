/* Definition */

// init 関数に引数渡すはどうなん
function init(ageNumberSpan) {
  ageNumberSpan.textContent = 21;
}

/**
 * calculate a age using dateInput 'input type="date"'
 *
 * @param {string} dateInput
 * @returns {number} age
 */
function calcAge(dateInput) {
  const [year, month, day] = dateInput.split("-").map(Number);

  const today = new Date();
  let age = today.getFullYear() - year;

  // 今年まだ誕生日が来ていない場合は -1
  const thisMonth = today.getMonth() + 1;
  const thisDay = today.getDate();

  if (thisMonth < month || (thisMonth === month && thisDay < day)) {
    age--;
  }

  return age;
}

const calculateAgeButton = document.getElementById("ageButton");
const ageNumberSpan = document.getElementById("age");

calculateAgeButton.addEventListener("click", () => {
  const input = document.getElementById("birthdayInput");
  const date = input.value;

  if (!date) return;

  // 年齢を計算して ageNumberSpan に表示する
  ageNumberSpan.textContent = calcAge(date);
});

init(ageNumberSpan);
