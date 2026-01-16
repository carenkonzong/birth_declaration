import { AlertCircle, Home, RefreshCw } from "lucide-react";

function ErrorPage() {
  return (
    <>
      <div className="flex justify-center m-5">
        <div className="flex w-full max-w-5xl flex-col">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Error</h1>
              <h2 className="text-gray-500 text-lg">Something went wrong</h2>
            </div>
            <div className="ml-auto flex items-center">
              <button className="px-6 py-3 rounded-xl text-white flex bg-linear-to-r from-[#3582f8] via-[#a25de3] to-[#23bf72]">
                <div className="mr-3 flex items-center">
                  <AlertCircle size={20} />
                </div>
                Report Issue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-5 pb-10">
        <div className="max-w-5xl bg-[#fbfbfb] border w-full p-8 rounded-2xl border-black/10">
          <div className="text-center py-12">
            <div className="mb-6 flex justify-center">
              <div className="bg-red-100 p-4 rounded-full">
                <AlertCircle size={48} className="text-red-600" />
              </div>
            </div>

            <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Page Not Found
            </h3>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
              Please check the URL and try again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="px-8 py-3 bg-linear-to-r from-[#3582f8] via-[#a25de3] to-[#23bf72] text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all">
                <Home size={20} />
                Go Home
              </button>

              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2">
                <RefreshCw size={20} />
                Refresh Page
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-gray-800 mb-3">
                What you can try:
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Check if the URL is correct</li>
                <li>• Try going back to the previous page</li>
                <li>• Clear your browser cache and try again</li>
                <li>• Contact support if the problem persists</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-10 pb-8 px-4">
        <div className="max-w-5xl w-full">
          <button className="w-full bg-linear-to-r from-[#3582f8] via-[#a25de3] to-[#23bf72] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
