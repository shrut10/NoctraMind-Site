import "./styles/globals.css";


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
export const metadata = {
  title: "Jayashruthi Rajesh Babu | Data Scientist & AI Developer",
  description:
    "Portfolio of Jayashruthi (Shruthi) Rajesh Babu — Data Science student, AI developer, automation builder and creative researcher.",
  keywords: [
    "Jayashruthi",
    "Jayashruthi Rajesh Babu",
    "Shruthi Rajesh Babu",
    "Shruthi Rajesh",
    "Shruthi RB",
    "Jayashruthi RB",
    "Shruthi portfolio",
    "Jayashruthi portfolio",
    "AI projects",
    "data science portfolio"
  ]
};
