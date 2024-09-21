"use client";
import React, { useState, useEffect } from "react";

const Artwork: React.FC = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch("/api/form");
                if (response.ok) {
                    const data = await response.json();
                    setImageUrl(data.imageUrl);
                } else {
                    console.error("Failed to fetch the image:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };

        fetchImage();
    }, []);

    return (
        <section className="flex flex-col items-center">
            {imageUrl ? (
                <img
                    loading="lazy"
                    src={imageUrl}
                    alt="AI Generated NFT"
                    className="object-contain mt-3 w-[800px] aspect-[2]"
                />
            ) : (
                <p>Loading image...</p>
            )}
        </section>
    );
};

export default Artwork;
