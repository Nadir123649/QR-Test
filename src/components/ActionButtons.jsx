export default function ActionButtons() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-[10px] px-5 flex justify-between gap-3 z-50">
            <button className="w-36 py-[10px] border border-blue-600 text-black rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Cancel
            </button>
            <button className="w-36 py-[10px] bg-black text-white  rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors">
                Save Changes
            </button>
        </div>
    );
}
