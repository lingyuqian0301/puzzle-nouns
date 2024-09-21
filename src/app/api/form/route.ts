import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/images/generations';

async function getNFTs() {
    // return 3 NFT imageurl
}

function getRandomPosition(backgroundWidth: number, backgroundHeight: number, imageWidth: number, imageHeight: number) {
    const x = Math.floor(Math.random() * (backgroundWidth - imageWidth));
    const y = Math.floor(Math.random() * (backgroundHeight - imageHeight));
    return { x, y };
}

async function generateArtwork() {
    
}


export async function GET(req: NextRequest) {
    try {
        // Generate or fetch the NFT image URL
        const imageUrl = await generateArtwork();
        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
    }
}