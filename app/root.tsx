import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { SITE_CONFIG } from "./lib/constants";
import { ThemeProvider } from './hooks/useTheme';

import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: SITE_CONFIG.title },
    { name: "description", content: SITE_CONFIG.description },
    { name: "keywords", content: SITE_CONFIG.keywords.join(", ") },
    { name: "author", content: "Haven Finance" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: SITE_CONFIG.title },
    { property: "og:description", content: SITE_CONFIG.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_CONFIG.url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SITE_CONFIG.title },
    { name: "twitter:description", content: SITE_CONFIG.description },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
