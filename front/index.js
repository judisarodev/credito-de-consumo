const rateElement = document.getElementById('rate');
const timeframeElement = document.getElementById('timeframe');
const amountElement = document.getElementById('amount');
const interestElement = document.getElementById('interest');
const button = document.getElementById('submit');

button.addEventListener('click', async () => {    
    const amount = document.getElementById('amount-input').value;
    const timeframe = document.getElementById('timeframe-input').value;
    
    if(amount && timeframe){
        button.disabled = true;
        const interestRate = await getInterestRate(amount, timeframe);
        const usuryRate = await getUsuryRate();
        showData(interestRate, usuryRate, amount, timeframe);
        button.disabled = false;
    }else{
        alert('Ingresa todos los datos del formulario');
    }
    
}); 

async function getUsuryRate(){
    const { usuryRate } = await fetch("http://localhost:3000/get-usury-rate", {
        headers: {
            'Content-Type': 'application-json'
        },
        method: 'GET'
    }).then((response) => response.json())
    .then((usuryRate) => usuryRate)
    .catch((e) => new Error("No fue posible acceder a la información solicitada", e));

    return usuryRate; 
}

async function getInterestRate(amount, timeframe){
    const { interestRate } = await fetch(`http://localhost:3000/get-interest-rate/${amount}/${timeframe}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then((response) => response.json())
    .then((interestRate) => interestRate)
    .catch((e) => new Error('No fue posible consultar la información', e));

    return interestRate; 
}

function showData(interestRate, usuryRate, amount, timeframe) {
    rateElement.textContent = usuryRate + ' %'; 
    timeframeElement.textContent = timeframe + ' meses';
    amountElement.textContent = amount + ' $';
    interestElement.textContent = interestRate + ' %'; 
}
