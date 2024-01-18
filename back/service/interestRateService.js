import { getUsuryRate } from "./usuryRateService.js";

async function getInterestRate(amount, timeframe){
    amount = parseInt(amount);
    timeframe = parseInt(timeframe);
    const rate = await getUsuryRate();

    return amount*timeframe*rate/100;
}

export { getInterestRate };