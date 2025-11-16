import "./site/styles/globals.css";

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Jayashruthi Rajesh Babu",
  description:
    "This site is my personal lab for my works and findings on AI and consciousness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
