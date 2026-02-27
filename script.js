const capitalInput = document.getElementById('capital');
const percentInput = document.getElementById('percent');
const resultElement = document.getElementById('result');
const calcBtn = document.getElementById('calcBtn');

function formatEuro(value) {
  return new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function calculateRisk() {
  const capital = Number(capitalInput.value);
  const percent = Number(percentInput.value);

  if (!Number.isFinite(capital) || !Number.isFinite(percent) || capital < 0 || percent < 0 || percent > 100) {
    resultElement.textContent = 'Entre des valeurs valides (capital positif et risque entre 0 et 100%).';
    return;
  }

  const risk = (capital * percent) / 100;
  resultElement.textContent = `Risque conseillé : ${formatEuro(risk)} €`;
}

calcBtn.addEventListener('click', calculateRisk);
capitalInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') calculateRisk();
});
percentInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') calculateRisk();
});

calculateRisk();
