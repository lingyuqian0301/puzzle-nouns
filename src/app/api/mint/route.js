import { NextResponse } from 'next/server';
import Web3 from 'web3';

const contractAddress = '0xCA67f533ACEeBd68946cDcfF047121eeE124EACA' //contract address
const contractABI = []

export async function mint_piece() {


}

export async function mint_artwork() {


}

export async function POST(req) {
    try {
        const { message } = await req.json();
        console.log(message);
        return NextResponse.json("Success");
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json("Failed");
    }
}
