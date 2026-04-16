import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "柳林充｜生成AIコンサルタント",
  description:
    "元上場企業 営業部 全国売上3位。非エンジニアだからこそ伝わる、生成AI導入サポート。Claude Code初期設定・業務自動化・動画制作・SNS運用代行。",
  openGraph: {
    title: "柳林充｜生成AIコンサルタント",
    description:
      "非エンジニアだから、伝わる。生成AIの導入を、あなたと同じ目線で伴走します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
