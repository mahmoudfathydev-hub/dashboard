import BgCircle from "@/components/BgCircle";
import BgSquare from "@/components/BgSquare";

const LogInPage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#131022]">
            <div className="relative w-full max-w-md sm:max-w-lg">
                <BgCircle className="hidden sm:block" />
                <BgSquare className="hidden sm:block" />
                <div className="relative z-10 bg-[#1E1B2E] border border-[#3A3750] rounded-2xl w-full p-6 sm:p-8 shadow-lg">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-extrabold text-white">LOG IN</h2>
                        <p className="text-gray-400 text-sm mt-1">Enter your access key to continue</p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <label className="text-gray-300 text-sm">
                            Access Key
                            <input
                                type="text"
                                name="accessKey"
                                id="accessKey"
                                placeholder="Enter your access key"
                                className="mt-1 w-full px-4 py-2 rounded-lg bg-[#2A2738] border border-[#3A3750] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition-colors duration-300 text-sm font-medium"
                        >
                            Log In
                        </button>
                    </form>
                    <p className="text-gray-400 text-center text-xs mt-4 hover:text-white transition cursor-pointer">
                        Forgot your access key?
                    </p>
                </div>
            </div>
        </main>
    );
};

export default LogInPage;
