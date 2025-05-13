import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "집중ON - 딴짓 그만, 지금 집중ON!",
  description: "뽀모도로 타이머와 유튜브 차단으로 집중력을 높여주는 크롬 확장 프로그램",
  keywords: ["집중력", "뽀모도로", "타이머", "집중ON","유튜브 차단", "크롬 확장프로그램", "생산성", "학습", "업무 효율"],
  authors: [{ name: "FocusON Team" }],
  creator: "FocusON Team",
  publisher: "FocusON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "집중ON - 딴짓 그만, 지금 집중ON!",
    description: "뽀모도로 타이머와 유튜브 차단으로 집중력을 높여주는 크롬 확장 프로그램",
    url: "https://focuson.kr",
    siteName: "집중ON",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "집중ON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "집중ON - 딴짓 그만, 지금 집중ON!",
    description: "뽀모도로 타이머와 유튜브 차단으로 집중력을 높여주는 크롬 확장 프로그램",
    images: ["/og-image.png"],
    creator: "@focuson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // 구글 서치 콘솔 인증 코드를 추가해주세요
  },
  alternates: {
    canonical: "https://focuson.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
