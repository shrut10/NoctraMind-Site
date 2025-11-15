import "./site/styles/globals.css";

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "NoctraMind by Jayashruthi Rajesh Babu",
  description:
    "NoctraMind is my lab for my works and findings on AI and consciousness.",
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
