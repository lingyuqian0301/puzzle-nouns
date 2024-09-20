import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/images/generations';

async function generateNFT(prompt: string): Promise<string> {
    try {
        const response = await axios.post(
            API_URL,
            {
                prompt,
                n: 1,
                size: '1024x1024',
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        const imageUrl = response.data.data[0].url;
        return imageUrl;
    } catch (error) {
        console.error('Error generating NFT:', error);
        throw error;
    }
}

export async function POST(req: NextRequest) {
    try {
        const { prompt } = await req.json();
        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }
        const imageUrl = await generateNFT(prompt);
        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
