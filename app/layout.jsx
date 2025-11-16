import "./styles/globals.css";


import ClientLayout from "./ClientLayout";


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
export const metadata = {
  title: "Jayashruthi Rajesh Babu | Portfolio",
  description:
    "Jayashruthi (Shruthi) Rajesh Babu's Portfolio: Data Science student, AI developer, automation builder and creative technologist.",
  keywords: [
    "Jayashruthi Rajesh Babu",
    "Shruthi Rajesh Babu",
    "Jayashruthi Rajesh",
    "Shruthi Rajesh",
    "Shruthi RB",
    "Jayashruthi RB",
    "Jayashruthi portfolio",
    "Shruthi AI portfolio",
    "Data Science portfolio Leeds",
    "AI developer portfolio"
  ],
  authors: [{ name: "Jayashruthi Rajesh Babu" }],
  creator: "Jayashruthi Rajesh Babu",
  publisher: "Jayashruthi Rajesh Babu",
};
