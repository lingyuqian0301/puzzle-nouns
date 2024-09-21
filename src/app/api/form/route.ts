import { NextRequest, NextResponse } from 'next/server';

async function generateArtwork() {
    // complete through smart contract
    const head = 14;
    const body = 2;
    const accessory = 10;
    try {
        const response = await fetch(`https://api.cloudnouns.com/v1/pfp?head=${head}&body=${body}&accessory=${accessory}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const svgText = await response.text();
        return svgText;
    } catch (error) {
        console.error('Error fetching SVG:', error);
    }
}


export async function POST(req: NextRequest) {
    try {
        const svgText = await generateArtwork();
        // mint

        return NextResponse.json({ svgText });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
    }
}