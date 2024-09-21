"use client";
import React, { useState, useEffect } from "react";

const Artwork: React.FC = () => {
    const [svgText, setSvgText] = useState("")

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch("/api/form");
                if (response.ok) {
                    const data = await response.json();
                    setSvgText(data.svgText);
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
            <section className="flex flex-col items-center">
                {svgText ? (
                    <div dangerouslySetInnerHTML={{ __html: svgText }} />
                ) : (
                    <p>Loading...</p>
                )}
            </section>
        </section>
    );
};

export default Artwork;
