export function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <svg
        className="animate-spin h-12 w-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <p className="mt-4 text-indigo-600 text-lg font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
}
