import { Bell, User, ArrowLeft } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-3  bg-white  shadow-md sticky top-0 z-50 backdrop-blur-md">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
            <div className="flex gap-3">
                <Bell className="w-6 h-6 text-gray-600" />
                <User className="w-6 h-6 text-gray-600" />
            </div>
        </header>
    );
}
