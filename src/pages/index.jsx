import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import QRCodePreview from "@/components/QRCodePreview";
import FrameOptions from "@/components/FrameOptions";
import ActionButtons from "@/components/ActionButtons";

const Home = () => {
    return (
        <>
            <Head>
                <title>QR - Code</title>
                <meta name="description" content="Customize your QR code" />
                <meta name="keywords" content="QR code, generator, customize" />
            </Head>

            <div className="min-h-screen bg-gray-100">
                <Header />

                <h2 className="font-bold text-xl mt-3 text-center mb-3">
                    Customize QR Code
                </h2>

                <main className="px-4 pb-[80px]">
                    <QRCodePreview />
                    <FrameOptions />
                    <ActionButtons />
                </main>
            </div>
        </>
    );
};

export default Home;
