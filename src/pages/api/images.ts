import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
    person: string
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await axios.get("https://dog.ceo/api/breed/malinois/images");
        res.status(200).send(JSON.stringify(response.data))
    } catch (error) {
        console.error(error);
    }
}