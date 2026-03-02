import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Opsætning af din primære font (Plus Jakarta Sans)
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "KODEKS.TECH",
  description: "Klarhed i et komplekst marked - Tech-jura og indsigt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${jakarta.variable} font-sans antialiased bg-white`}>
        {/* Her bliver indholdet fra din page.tsx sat ind */}
        {children}
      </body>
    </html>
  );
}
    </html>
  );
}
