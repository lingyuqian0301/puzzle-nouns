// pages/api/build.ts
"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const NFTBuild: React.FC = () => {
    const [promptHead, setPromptHead] = useState("");
    const [promptBody, setPromptBody] = useState("");
    const [promptAccessory, setPromptAccessory] = useState("");
    const [svgText, setSvgText] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("button submit")
        const response = await fetch("/api/build", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ promptHead, promptBody, promptAccessory }),
        });
        setSvgText(await response.json());
        console.log(svgText);
    };

    return (
        <section className="flex flex-col items-center">
            <section className="flex flex-col items-center">
                {svgText ? (
                    <div dangerouslySetInnerHTML={{ __html: svgText }} />
                ) : (
                    <p>Loading...</p>
                )}
            </section>
            <form method="POST" onSubmit={handleSubmit} className="relative flex items-center mt-5">
                <i className="fa-solid fa-search absolute left-3 text-gray-500" />
                <input
                    aria-label="prompt"
                    type="text"
                    className="pl-10 p-2 border-white rounded-md w-[600px]"
                    placeholder="Enter a simple key word to generate Head!"
                    value={promptHead}
                    onChange={(e) => setPromptHead(e.target.value)}
                />
            </form>
            <form method="POST" onSubmit={handleSubmit} className="relative flex items-center mt-5">
                <i className="fa-solid fa-search absolute left-3 text-gray-500" />
                <input
                    aria-label="prompt"
                    type="text"
                    className="pl-10 p-2 border-white rounded-md w-[600px]"
                    placeholder="Enter a simple key word to generate Body!"
                    value={promptBody}
                    onChange={(e) => setPromptBody(e.target.value)}
                />
            </form>
            <form method="POST" onSubmit={handleSubmit} className="relative flex items-center mt-5">
                <i className="fa-solid fa-search absolute left-3 text-gray-500" />
                <input
                    aria-label="prompt"
                    type="text"
                    className="pl-10 p-2 border-white rounded-md w-[600px]"
                    placeholder="Enter a simple key word to generate Accessory!"
                    value={promptAccessory}
                    onChange={(e) => setPromptAccessory(e.target.value)}
                />
            </form>
            <form method="POST" onSubmit={handleSubmit} className="relative flex items-center mt-5">
                <button type="submit" className="ml-4 mt-10 p-2 bg-blue-500 text-white rounded-md">
                    Generate
                </button>
            </form>
        </section>
    );
};

export default NFTBuild;
