document.querySelectorAll('.comment').forEach(c => {
  const plus = c.querySelector('.plus');
  const minus = c.querySelector('.minus');
  const score = c.querySelector('.score');

  plus.onclick = () => score.textContent = +score.textContent + 1;
  minus.onclick = () => {
    if (+score.textContent > 0) {
      score.textContent = +score.textContent - 1;
    }
  };
});