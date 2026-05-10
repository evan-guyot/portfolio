import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "../providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const isFrench = lang === "fr";

  return {
    metadataBase: new URL("https://eguyot.dev"),

    title: "Evan Guyot",

    description: isFrench
      ? "Site web d'Evan Guyot présentant les projets réalisés, les formations suivies et les technologies maîtrisées"
      : "Evan Guyot's website showcasing projects, completed courses, and mastered technologies.",

    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark') document.documentElement.classList.add('dark');
              } catch {}
            `,
          }}
        />

        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
