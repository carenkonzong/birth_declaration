import { AlertCircle } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

export function ErrorFetchingDeclaration({
  title = "We couldn’t load your declarations",
  description = "We’re having trouble connecting to the server/database. Please try again, and if the issue persists contact support.",
}: Props) {
  return (
    <div className="w-full mt-5">
      <div className="rounded-2xl  bg-white ">
        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
              <AlertCircle className="h-7 w-7 text-red-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>

            <p className="mt-6 text-xs text-gray-500">
              Tip: Check your internet connection and try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFetchingDeclaration;
