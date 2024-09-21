import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/images/generations';

async function generateArtwork(prompt: string): Promise<string> {
    try {
        const modifiedPrompt = `a pixel character featuring wearing oversized glasses and a unique hat and having small body and ${prompt}`;
        const response = await axios.post(
            API_URL,
            {
                prompt: modifiedPrompt,
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
        console.log(imageUrl);
        return imageUrl;
    } catch (error) {
        console.error('Error generating NFT:', error);
        throw error;
    }
}

async function getPrompt() {
    for (let i = 1; i < 4; i++) { 
        // get 3 prompt and combine
    }
}

export async function POST(req: NextRequest) {
    
}