import { NextRequest, NextResponse } from 'next/server';

async function generateArtwork() {
    // complete through smart contract
    const head = 14;
    const body = 2;
    const accessory = 10;
    const imageUrl = `https://api.cloudnouns.com/v1/pfp?head=${head}&body=${body}&accessory=${accessory}`);
    return imageUrl;
}


export async function POST(req: NextRequest) {
    try {
        const imageUrl = await generateArtwork();
        // mint

        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
    }
}