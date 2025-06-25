import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen">
        <main className="p-6 w-[70vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
