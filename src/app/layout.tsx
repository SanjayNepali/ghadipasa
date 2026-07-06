import type { Metadata } from "next";
import "@/styles/globals.css";
import { APP_NAME, APP_TAGLINE } from "@/constants";
import SessionProvider from "@/components/providers/SessionProvider";
import ToastProvider from "@/components/providers/ToastProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_TAGLINE,
  keywords: ["handmade gifts", "gift shop", "Nepal", "Nimki", "handcrafted"],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         process.env.NEXT_PUBLIC_APP_URL,
    siteName:    APP_NAME,
    title:       APP_NAME,
    description: APP_TAGLINE,
  },
  verification: {
    google: "843BYOThOi7B8bAZWoxX3CSrrgeocwpTbcwV75bj6U0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
          <ToastProvider />
        </SessionProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}