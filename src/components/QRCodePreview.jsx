import { RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

export default function QRCodePreview() {
    const [isMobile, setIsMobile] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Optional: stickiness on scroll for mobile
    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return (
        <div
            className={`transition-all duration-300 rounded-lg  ${isMobile
                ? "w-full flex flex-col items-center py-4 sticky top-[40px] z-40 px-4  bg-white shadow-md"
                : "w-full flex flex-col items-center py-4 sticky top-[40px] z-40 px-4  bg-white shadow-md"
                }`}
        >
            <div className=" bg-white  flex flex-col items-center w-full max-w-[400px] mx-auto">
                <p className="mb-3 text-center font-bold text-slate-800 uppercase text-lg">
                    Preview
                </p>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NextJS"
                    alt="QR Code"
                    className="w-50 h-50"
                />
                <button className="mt-3 px-4 py-[10px] bg-black text-white rounded-[50px]">
                    GET THE APP
                </button>
                <p className="mt-2 text-green-600 font-medium text-sm">
                    Scannability: Excellent ✅
                </p>
                {!isMobile && (
                    <button className="mt-2 px-3 py-2  border-black border-2 rounded-[32px] text-sm font-medium flex items-center gap-2">
                        <RotateCcw />
                        RESET DESIGN
                    </button>
                )}
            </div>
        </div>
    );
}
