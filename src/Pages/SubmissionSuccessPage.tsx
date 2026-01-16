import { CheckCircle2, FileText, ArrowLeft, Plus } from "lucide-react";

type ConfirmationProps = {
  declarationId?: string; // e.g. "DCL-10005"
  childFullName?: string; // e.g. "Ava Patel"
  status?: "pending" | "approved" | "draft";
  submittedAt?: string; // e.g. "15/01/2026"
  onViewDetails?: () => void;
  onBackToDashboard?: () => void;
  onCreateAnother?: () => void;
};

const statusStyles: Record<string, string> = {
  pending: "bg-blue-50 text-blue-700 border-blue-100",
  approved: "bg-emerald-50 text-emerald-700 border-emerald-100",
  draft: "bg-gray-50 text-gray-700 border-gray-200",
};

export function SubmissionSuccessPage({
  declarationId = "DCL-10005",
  childFullName = "Ava Patel",
  status = "pending",
  submittedAt = "15/01/2026",
  onViewDetails,
  onBackToDashboard,
  onCreateAnother,
}: ConfirmationProps) {
  return (
    <div className="w-full px-5 mt-10">
      {/* Page container like your main content area */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="px-6 py-10 sm:px-10 sm:py-12">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              {/* Icon bubble */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Declaration submitted successfully
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Your declaration has been received and is now being processed.
                </p>

                {/* Status pill like your list pills */}
                <div className="mt-3 inline-flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                      statusStyles[status] ?? statusStyles.pending
                    }`}
                  >
                    {status.toUpperCase()}
                  </span>

                  {submittedAt && (
                    <span className="text-xs text-gray-500">
                      Submitted: {submittedAt}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Primary actions (right side) */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onBackToDashboard}
                disabled={!onBackToDashboard}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to dashboard
              </button>

              <button
                type="button"
                onClick={onViewDetails}
                disabled={!onViewDetails}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white
                           bg-gradient-to-r from-blue-500 to-emerald-400 hover:opacity-95 transition disabled:opacity-50"
              >
                <FileText className="h-4 w-4" />
                View details
              </button>
            </div>
          </div>

          {/* Details card (looks like your declaration cards) */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white">
            <div className="px-6 py-6">
              <h2 className="text-lg font-bold text-gray-900">
                Submission details
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Keep this information for tracking.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-xs font-semibold text-gray-800">Child</p>
                  <p className="mt-1 text-sm text-gray-900">{childFullName}</p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-xs font-semibold text-gray-800">
                    Declaration ID
                  </p>
                  <p className="mt-1 text-sm text-gray-900">{declarationId}</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
                <p className="text-sm font-semibold text-gray-900">
                  What happens next?
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                  <li>Your declaration is queued for review.</li>
                  <li>You can track the status in “Your Declarations”.</li>
                  <li>
                    You’ll be notified if additional information is required.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              Need to submit another declaration?
            </p>

            <button
              type="button"
              onClick={onCreateAnother}
              disabled={!onCreateAnother}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
              New declaration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
