// app/page.tsx
'use client'; // Add this line to mark the file as a Client Component

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { FaRobot } from 'react-icons/fa';

export default function Home() {
  const [nfts, setNfts] = useState([]);

  // Fetch AI-generated NFTs from an API (placeholder API for now)
  useEffect(() => {
    async function fetchNFTs() {
      const response = await axios.get('/api/nfts'); // This is a placeholder; connect to your AI NFT API.
      setNfts(response.data.nfts);
    }
    fetchNFTs();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI-Generated NFTs</h1>

      <div className={styles.grid}>
        {nfts.map((nft, index) => (
          <div key={index} className={styles.card}>
            <img src={nft.image} alt={`NFT ${index + 1}`} className={styles.nftImage} />
            <h2>{nft.title}</h2>
            <p>Created by AI <FaRobot className={styles.robotIcon} /></p>
          </div>
        ))}
      </div>
    </div>
  );
}
