import { useState } from "react";

export default function FrameOptions() {
    const frames = ["No Frame", "SCAN ME", "CUSTOM", "SPECIAL"];
    const [selectedFrame, setSelectedFrame] = useState("No Frame");
    const [frameColor, setFrameColor] = useState("#000000");
    const [frameText, setFrameText] = useState("SCAN ME");

    return (
        <div className="px-4 bg-white mt-4 rounded-lg shadow-md pb-4 pt-4 ">
            <h2 className="font-semibold text-lg mb-3">Frame</h2>

            {/* Horizontal scroll */}
            <div className="flex gap-3 overflow-x-auto py-2">
                {frames.map((frame) => (
                    <button
                        key={frame}
                        className={`flex-shrink-0 border px-4 py-2 rounded-md ${selectedFrame === frame ? "bg-black text-white" : "bg-white"
                            }`}
                        onClick={() => setSelectedFrame(frame)}
                    >
                        {frame}
                    </button>
                ))}
            </div>

            {/* Frame color */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Frame Color</label>
                <input
                    type="color"
                    value={frameColor}
                    onChange={(e) => setFrameColor(e.target.value)}
                    className="mt-1 border rounded w-full h-10"
                />
            </div>

            {/* Frame text */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Frame Text</label>
                <input
                    type="text"
                    value={frameText}
                    onChange={(e) => setFrameText(e.target.value)}
                    placeholder="SCAN ME"
                    className="mt-1 border rounded w-full p-2"
                />
            </div>
        </div>
    );
}
