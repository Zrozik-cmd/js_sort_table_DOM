'use strict';

addEventListener('click', (event) => {
  const th = event.target.closest('th');

  if (!th) {
    return;
  }

  const index = Array.from(th.parentElement.children).indexOf(th);

  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const firstValue = rows[0].children[index].textContent.trim();
  const isNumeric = !isNaN(firstValue);

  rows.sort((a, b) => {
    const cellA = a.children[index].textContent.trim();
    const cellB = b.children[index].textContent.trim();

    if (isNumeric) {
      return Number(cellA) - Number(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
});
