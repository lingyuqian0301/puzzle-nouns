import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateTraits(prompt: string) {

}

async function generateNFT(promptHead: number, promptBody: number, promptAccessory: number) {
    try {
        const response = await fetch(`https://api.cloudnouns.com/v1/pfp?head=${promptHead}&body=${promptBody}&accessory=${promptAccessory}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const svgText = await response.text();
        return svgText;
    } catch (error) {
        console.error('Error fetching SVG:', error);
    }
};


async function getImageMetadata(imageUrl: string) {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data);
    const metadata = await sharp(imageBuffer).metadata();
    return metadata
}


async function cutImageIntoPieces(imagePath: string, index: Number) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            console.log(imagePath);
            const image = sharp(imagePath);
            const metadata = await image.metadata();
            console.log(metadata)
            const size = metadata.width;
            if (!size || metadata.height !== size) {
                throw new Error('Image is not square!');
            }

            // Use Math.floor to ensure pieceSize is an integer
            const pieceSize = Math.floor(size / 3);
            const outputDir = path.join(process.cwd(), 'src/app/img/pieces');
            const left = col * pieceSize;
            const top = row * pieceSize;

            // Calculate the width and height, ensuring they don't exceed the image size
            let width = pieceSize;
            let height = pieceSize;

            // Adjust width/height if they exceed the boundaries of the image
            if (left + width > size) {
                width = size - left;
            }
            if (top + height > size) {
                height = size - top;
            }

            console.log(`Image dimensions: ${left}x${top}x${width}x${height}`);


            // Ensure width and height are positive integers
            if (width > 0 && height > 0) {
                const img = image.extract({ left, top, width, height });
                await img.toFile(path.join(outputDir, `piece_${index}_${row}_${col}.png`));
            } else {
                console.warn(`Skipping extraction for row ${row}, col ${col} due to invalid size`);
            }
        }
    }
}

async function generateRandomNum(prompt: string) {
    return prompt.length;
}

export async function POST(req: NextRequest) {
    try {
        const { promptHead, promptBody, promptAccessory } = await req.json();
        if (!promptHead || !promptBody || !promptAccessory) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }
        const head = await generateRandomNum(promptHead);
        const body = await generateRandomNum(promptBody);
        const accessory = await generateRandomNum(promptAccessory);
        console.log({ head }, { body }, { accessory })

        const svgText = await generateNFT(head % 234, body % 30, accessory % 137);
        return NextResponse.json({ svgText });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
