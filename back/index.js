import express from "express";
import cors from "cors";
import { getInterestRate } from "./service/interestRateService.js";
import { getUsuryRate } from "./service/usuryRateService.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

app.get('/get-interest-rate/:amount/:timeframe', async (req, res) => {
    const { amount, timeframe } = req.params;
    const interestRate = await getInterestRate(amount, timeframe); 

    res.json({
        interestRate
    });
});

app.get('/get-usury-rate', async (req, res) => {
    const usuryRate = await getUsuryRate();

    res.json({
        usuryRate
    });
});

app.listen(port); 