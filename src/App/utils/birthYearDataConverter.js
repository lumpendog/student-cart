export const birthYearDataConverter = (data) => {
  const age = String(new Date().getFullYear() - data);
  return `${data} (${age} ${declOfNum(age, words)})`;
};

const words = ['год', 'года', 'лет'];

function declOfNum(number, words) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}
