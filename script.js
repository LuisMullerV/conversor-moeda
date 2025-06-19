document.getElementById('converter-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (!amount || amount <= 0) {
        alert('Por favor, insira um valor válido!');
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
        const data = await response.json();

        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `${amount} ${fromCurrency} = ${data.result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error('Erro ao buscar taxa de câmbio:', error);
        alert('Erro ao buscar taxa de câmbio. Tente novamente mais tarde.');
    }
});