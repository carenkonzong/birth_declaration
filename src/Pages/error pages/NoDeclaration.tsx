import NewDeclarationButton from "@/ui (custom)/newDeclarationButton";
import { FilePlus } from "lucide-react";

function NoDeclaration() {
  return (
    <div className="   ">
      <div className="px-6 py-16 sm:px-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <FilePlus className="h-8 w-8 text-blue-600" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          No declarations yet
        </h3>

        <p className="mt-2 max-w-md mx-auto text-sm text-gray-600">
          You haven’t created any birth declarations yet. Once you submit a
          declaration, it will appear here for tracking and review.
        </p>

        <div className="mt-8 inline-flex items-center">
          <NewDeclarationButton />
        </div>
      </div>
    </div>
  );
}

export default NoDeclaration;
