import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

type SnowReport = {
    resortName: string,
    baseFreshSnowCm: number,
    midFreshSnowCm: number,
    upperFreshSnowCm: number
}

export const getSnowData = async (req: Request, res: Response) => {
    const RESORT_ID = req.params.id;
    if (!RESORT_ID) {
        res.status(400).json({ message: 'Missing resort id'});
    }
    try {
        const weatherAPIResponse = await axios.get(
            `https://api.weatherunlocked.com/api/snowreport/${RESORT_ID}?app_id=${process.env.WEATHER_APP_ID}&app_key=${process.env.WEATHER_API_KEY}`
        );
        res.json(weatherAPIResponse);
    } catch (error) {
        if (axios.isAxiosError(error)){
            console.error('API error:', error.message);
        } else {
            console.error('Unknown error')
        }
        res.status(400).json({ message: 'Failed to fetch snow report' });
    }
}

