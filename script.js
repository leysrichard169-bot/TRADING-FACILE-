const capitalInput = document.getElementById('capital');
const percentInput = document.getElementById('percent');
const resultElement = document.getElementById('result');
const calcBtn = document.getElementById('calcBtn');

function calculateRisk() {
  const capital = Number(capitalInput.value);
  const percent = Number(percentInput.value);

  if (!Number.isFinite(capital) || !Number.isFinite(percent) || capital < 0 || percent < 0) {
    resultElement.textContent = 'Entre des valeurs valides.';
    return;
  }

  const risk = (capital * percent) / 100;
  resultElement.textContent = `Risque conseillé : ${risk.toFixed(2)} €`;
}

calcBtn.addEventListener('click', calculateRisk);
