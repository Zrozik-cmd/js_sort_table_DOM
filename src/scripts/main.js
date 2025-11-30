'use strict';

addEventListener('click', event => {
  const th = event.target.closest('th');

  if (!th) {
    return;
  }

  const index = Array.from(th.parentElement.children).indexOf(th);

  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cellA = a.children[index].textContent.trim();
    const cellB = b.children[index].textContent.trim();

    const valA = isNaN(cellA) ? cellA : Number(cellA);
    const valB = isNaN(cellB) ? cellB : Number(cellB);

    if (valA > valB) return 1;
    if (valA < valB) return -1;

    return 0;
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
});
