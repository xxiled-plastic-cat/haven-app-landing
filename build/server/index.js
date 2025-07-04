import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useContext, createContext, useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CurrencyDollarIcon, ArrowsRightLeftIcon, TrophyIcon, CheckIcon, XMarkIcon, ShieldCheckIcon, DocumentCheckIcon, BuildingLibraryIcon, LockClosedIcon, ChevronDownIcon as ChevronDownIcon$1 } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const COMPARISON_DATA = [
  {
    feature: "Average Yield",
    traditional: "0.5%",
    haven: "3–5%*"
  },
  {
    feature: "Instant Access",
    traditional: "Limited",
    haven: true
  },
  {
    feature: "Complexity",
    traditional: false,
    haven: true
  }
];
const FAQ_DATA = [
  {
    question: "What is xUSD?",
    answer: "xUSD is our stable digital dollar that maintains its value while earning yield through secure, on-chain strategies."
  },
  {
    question: "How is Haven different from traditional savings?",
    answer: "Haven offers higher yields (3-5% vs 0.5%), instant access to your funds, and removes the complexity of traditional investing."
  },
  {
    question: "Is my money safe?",
    answer: "Yes, your funds are secured through audited smart contracts and established DeFi protocols with a proven track record."
  },
  {
    question: "How do I withdraw my money?",
    answer: "You can withdraw your funds instantly at any time through the Haven app. Your xUSD is converted back to dollars seamlessly."
  },
  {
    question: "What are the fees?",
    answer: "Haven charges a small management fee on the yield earned. There are no deposit or withdrawal fees."
  }
];
const SITE_CONFIG = {
  title: "Haven - Save Simply, Earn Effortlessly",
  description: "A modern way to grow your dollars with real yield—safe, simple, and automatic.",
  keywords: ["stable coin", "savings", "finance", "defi", "yield", "xUSD"],
  url: "https://haven.finance"
  // Update with actual URL
};
const colorThemes = {
  lightPink: {
    background: "#F5D7E3",
    backgroundDarker: "#E8C2D1",
    backgroundLighter: "#FBE8F0",
    headerText: "#4A2F35",
    bodyText: "#6E4A50",
    error: "#E53935",
    loading: "#FFCDD2",
    success: "#66BB6A"
  },
  terracotta: {
    background: "#E2725B",
    backgroundDarker: "#C05C4A",
    backgroundLighter: "#F1A087",
    headerText: "#3E231E",
    bodyText: "#5E3D36",
    error: "#B71C1C",
    loading: "#F8B4A8",
    success: "#81C784"
  },
  grey: {
    background: "#E0E0E0",
    backgroundDarker: "#BDBDBD",
    backgroundLighter: "#F5F5F5",
    headerText: "#212121",
    bodyText: "#424242",
    error: "#D32F2F",
    loading: "#EEEEEE",
    success: "#388E3C"
  },
  obsidian: {
    background: "#1A1A1A",
    backgroundDarker: "#0F0F0F",
    backgroundLighter: "#2E2E2E",
    headerText: "#FFFFFF",
    bodyText: "#CCCCCC",
    error: "#EF5350",
    loading: "#424242",
    success: "#66BB6A"
  }
};
const defaultTheme = "lightPink";
function getThemeColors(themeName) {
  return colorThemes[themeName];
}
function getThemeStyles(themeName) {
  const colors = getThemeColors(themeName);
  return {
    "--bg-main": colors.background,
    "--bg-darker": colors.backgroundDarker,
    "--bg-lighter": colors.backgroundLighter,
    "--text-header": colors.headerText,
    "--text-body": colors.bodyText,
    "--color-error": colors.error,
    "--color-loading": colors.loading,
    "--color-success": colors.success
  };
}
const ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("haven-theme");
      if (savedTheme && ["lightPink", "terracotta", "grey", "obsidian"].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    }
  }, []);
  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      localStorage.setItem("haven-theme", theme);
    }
  }, [theme, isClient]);
  const themeStyles = getThemeStyles(theme);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, setTheme, themeStyles }, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
const meta$1 = () => {
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
    { name: "twitter:description", content: SITE_CONFIG.description }
  ];
};
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(ThemeProvider, { children }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function ThemeWrapper({ children }) {
  const { themeStyles } = useTheme();
  useEffect(() => {
    const body = document.body;
    Object.entries(themeStyles).forEach(([key, value]) => {
      body.style.setProperty(key, value);
    });
    body.style.backgroundColor = "var(--bg-main)";
    return () => {
      Object.keys(themeStyles).forEach((key) => {
        body.style.removeProperty(key);
      });
      body.style.removeProperty("background-color");
    };
  }, [themeStyles]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "min-h-screen",
      style: {
        backgroundColor: "var(--bg-main)",
        ...themeStyles
      },
      children
    }
  );
}
const themeDisplayNames = {
  lightPink: "Light Pink",
  terracotta: "Terracotta",
  grey: "Grey",
  obsidian: "Obsidian"
};
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Menu.Button,
      {
        className: "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer",
        style: {
          backgroundColor: "var(--bg-main)",
          boxShadow: "2px 3px 4px rgba(0,0,0,0.3), -1.5px -2.5px 4px var(--bg-lighter)"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-11 h-11 rounded-full flex items-center justify-center",
            style: {
              backgroundColor: "var(--bg-main)",
              boxShadow: "inset 2px 3px 4px rgba(0,0,0,0.3), inset -1.5px -2.5px 4px var(--bg-lighter)"
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center",
                style: {
                  backgroundColor: "var(--bg-darker)"
                },
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center opacity-70",
                    style: {
                      backgroundColor: "var(--bg-main)"
                    },
                    children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-5 w-5", style: { color: "var(--text-header)" } })
                  }
                )
              }
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(
          Menu.Items,
          {
            className: "absolute right-0 mt-2 w-56 origin-top-right rounded-2xl p-1 ring-1 ring-black/5 focus:outline-none",
            style: {
              backgroundColor: "var(--bg-main)",
              boxShadow: "4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px var(--bg-lighter)"
            },
            children: /* @__PURE__ */ jsxs("div", { className: "py-1", children: [
              /* @__PURE__ */ jsx("div", { className: "px-3 py-2", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", style: { color: "var(--text-header)" }, children: themeDisplayNames[theme] }) }),
              Object.entries(colorThemes).map(([key, themeData]) => /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setTheme(key),
                  className: `${active ? "opacity-80" : ""} group flex w-full items-center rounded-xl px-3 py-2 text-sm transition-all duration-200`,
                  style: {
                    backgroundColor: active ? "var(--bg-lighter)" : "transparent",
                    color: "var(--text-body)"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "mr-3 h-4 w-4 rounded-full shadow-neuro-light",
                        style: { backgroundColor: themeData.background }
                      }
                    ),
                    themeDisplayNames[key]
                  ]
                }
              ) }, key))
            ] })
          }
        )
      }
    )
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      className: "fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            whileHover: { scale: 1.05 },
            className: "flex items-center space-x-2",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl shadow-neuro-outset-light flex items-center justify-center",
                  style: { backgroundColor: "var(--bg-lighter)" },
                  children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-xl font-bold font-serif",
                      style: { color: "var(--text-header)" },
                      children: "H"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-2xl font-bold font-serif",
                  style: { color: "var(--text-header)" },
                  children: "Haven"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center space-x-8", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#how-it-works",
              className: "text-sm font-medium hover:opacity-70 transition-opacity",
              style: { color: "var(--text-body)" },
              children: "How It Works"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#why-haven",
              className: "text-sm font-medium hover:opacity-70 transition-opacity",
              style: { color: "var(--text-body)" },
              children: "Why Haven"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#security",
              className: "text-sm font-medium hover:opacity-70 transition-opacity",
              style: { color: "var(--text-body)" },
              children: "Security"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#faq",
              className: "text-sm font-medium hover:opacity-70 transition-opacity",
              style: { color: "var(--text-body)" },
              children: "FAQ"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(ThemeToggle, {})
      ] })
    }
  );
}
function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  style = {}
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const baseStyles = {
    primary: {
      backgroundColor: "var(--text-header)",
      color: "var(--bg-main)",
      boxShadow: "2px 3px 4px rgba(0,0,0,0.3), -1.5px -2.5px 4px var(--bg-lighter)"
    },
    secondary: {
      backgroundColor: "var(--bg-lighter)",
      color: "var(--text-header)",
      boxShadow: "inset 2px 3px 4px rgba(0,0,0,0.1), inset -1.5px -2.5px 4px var(--bg-lighter)"
    }
  };
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      onClick,
      className: `${sizeClasses[size]} rounded-2xl font-medium transition-all duration-200 ${className}`,
      style: {
        ...baseStyles[variant],
        ...style
      },
      whileHover: {
        scale: 1.02,
        boxShadow: variant === "primary" ? "3px 4px 6px rgba(0,0,0,0.4), -2px -3px 6px var(--bg-lighter)" : "inset 3px 4px 6px rgba(0,0,0,0.15), inset -2px -3px 6px var(--bg-lighter)"
      },
      whileTap: {
        scale: 0.98,
        boxShadow: variant === "primary" ? "inset 2px 3px 4px rgba(0,0,0,0.3), inset -1.5px -2.5px 4px var(--bg-lighter)" : "2px 3px 4px rgba(0,0,0,0.2), -1.5px -2.5px 4px var(--bg-lighter)"
      },
      children
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "min-h-screen flex items-center justify-center px-4 py-20 md:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: "text-center lg:text-left",
            children: [
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.4 },
                  className: "text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6",
                  style: { color: "var(--text-header)" },
                  children: [
                    "Save simply.",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "block", children: "Earn effortlessly." })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.6 },
                  className: "text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0",
                  style: { color: "var(--text-body)" },
                  children: "A modern way to grow your dollars with real yield—safe, simple, and automatic."
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.8 },
                  className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                  children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "lg",
                        className: "font-semibold",
                        style: {
                          backgroundColor: "var(--text-header)",
                          color: "var(--bg-main)"
                        },
                        children: "Join the Waitlist"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "secondary",
                        size: "lg",
                        className: "font-semibold",
                        style: {
                          color: "var(--text-header)",
                          backgroundColor: "var(--bg-lighter)"
                        },
                        children: "Learn More"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.4 },
            className: "flex justify-center lg:justify-end",
            children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: {
                  y: [0, -10, 0],
                  rotate: [0, 1, 0, -1, 0]
                },
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                className: "w-64 h-[500px] rounded-[3rem] shadow-neuro-outset-light overflow-hidden",
                style: { backgroundColor: "var(--bg-lighter)" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[3rem] border-8 border-black/20" }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "absolute inset-4 rounded-[2rem] p-6 flex flex-col",
                      style: { backgroundColor: "var(--bg-main)" },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", style: { color: "var(--text-header)" }, children: "14:35" }),
                          /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-4 h-2 bg-current rounded-sm opacity-60" }),
                            /* @__PURE__ */ jsx("div", { className: "w-4 h-2 bg-current rounded-sm opacity-80" }),
                            /* @__PURE__ */ jsx("div", { className: "w-4 h-2 bg-current rounded-sm" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
                          /* @__PURE__ */ jsx("h2", { className: "text-xl font-serif font-bold", style: { color: "var(--text-header)" }, children: "Your savings" }),
                          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full shadow-neuro-light", style: { backgroundColor: "var(--bg-lighter)" } })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: "w-48 h-48 rounded-full shadow-neuro-light flex flex-col items-center justify-center",
                            style: { backgroundColor: "var(--bg-main)" },
                            children: [
                              /* @__PURE__ */ jsx("span", { className: "text-xs mb-2", style: { color: "var(--text-body)" }, children: "Your xUSD savings:" }),
                              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", style: { color: "var(--text-header)" }, children: "1,765.02" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs mt-1", style: { color: "var(--text-body)" }, children: "current interest rate: 3.5%" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-6", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full shadow-neuro-light flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", style: { color: "var(--text-header)" }, children: "-" }) }),
                          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full shadow-neuro-light flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", style: { color: "var(--text-header)" }, children: "+" }) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-3", style: { color: "var(--text-header)" }, children: "Transaction History" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 rounded-xl shadow-neuro-light", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: "var(--color-success)" }, children: "+ 100 xUSD" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: "var(--text-body)" }, children: "17th June 2025" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 rounded-xl shadow-neuro-light", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: "var(--color-error)" }, children: "- 25 xUSD" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: "var(--text-body)" }, children: "15th June 2025" })
                            ] })
                          ] })
                        ] })
                      ]
                    }
                  )
                ]
              }
            ) })
          }
        )
      ] })
    }
  );
}
const steps = [
  {
    icon: CurrencyDollarIcon,
    title: "Deposit Dollars",
    description: "Connect your bank account and deposit USD with just a few taps. No crypto knowledge required.",
    step: "01"
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Convert to xUSD",
    description: "Your dollars are automatically converted to xUSD, our stable digital currency that maintains its value.",
    step: "02"
  },
  {
    icon: TrophyIcon,
    title: "Earn Rewards",
    description: "Your xUSD is put to work in secure DeFi strategies, earning you 3-5% annual yield automatically.",
    step: "03"
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "how-it-works",
      className: "py-20 px-4 md:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "text-3xl md:text-5xl font-bold font-serif mb-6",
                  style: { color: "var(--text-header)" },
                  children: "How It Works"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg md:text-xl max-w-3xl mx-auto",
                  style: { color: "var(--text-body)" },
                  children: "Getting started with Haven is simple. Just three steps to start earning real yield on your savings."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.2 },
            viewport: { once: true },
            className: "relative",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute -top-4 -left-4 w-12 h-12 rounded-full shadow-neuro-outset-light flex items-center justify-center z-10",
                  style: { backgroundColor: "var(--bg-lighter)" },
                  children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-sm font-bold",
                      style: { color: "var(--text-header)" },
                      children: step.step
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { y: -5 },
                  transition: { duration: 0.3 },
                  className: "p-8 rounded-3xl shadow-neuro-light h-full",
                  style: { backgroundColor: "var(--bg-main)" },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "w-16 h-16 rounded-2xl shadow-neuro-light flex items-center justify-center mb-6",
                        style: { backgroundColor: "var(--bg-lighter)" },
                        children: /* @__PURE__ */ jsx(
                          step.icon,
                          {
                            className: "w-8 h-8",
                            style: { color: "var(--text-header)" }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "text-xl md:text-2xl font-bold font-serif mb-4",
                        style: { color: "var(--text-header)" },
                        children: step.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-base md:text-lg leading-relaxed",
                        style: { color: "var(--text-body)" },
                        children: step.description
                      }
                    )
                  ]
                }
              ),
              index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { x: [0, 5, 0] },
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  className: "w-12 h-0.5 rounded-full",
                  style: { backgroundColor: "var(--text-body)" },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-b-2 border-t-transparent border-b-transparent",
                      style: { borderLeftColor: "var(--text-body)" }
                    }
                  )
                }
              ) })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            viewport: { once: true },
            className: "text-center mt-16",
            children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg mb-6",
                  style: { color: "var(--text-body)" },
                  children: "Ready to start earning more on your savings?"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "px-8 py-4 rounded-3xl font-semibold text-lg shadow-neuro-outset-light hover:shadow-neuro-light transition-all duration-200",
                  style: {
                    backgroundColor: "var(--text-header)",
                    color: "var(--bg-main)"
                  },
                  children: "Get Started Today"
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function WhyHaven() {
  const renderValue = (value) => {
    if (typeof value === "boolean") {
      return value ? /* @__PURE__ */ jsx(CheckIcon, { className: "w-6 h-6 text-green-500 mx-auto" }) : /* @__PURE__ */ jsx(XMarkIcon, { className: "w-6 h-6 text-red-500 mx-auto" });
    }
    return value;
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "why-haven",
      className: "py-20 px-4 md:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "text-3xl md:text-5xl font-bold font-serif mb-6",
                  style: { color: "var(--text-header)" },
                  children: "Why Choose Haven?"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg md:text-xl max-w-3xl mx-auto",
                  style: { color: "var(--text-body)" },
                  children: "See how Haven compares to traditional savings accounts and why thousands are making the switch."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "max-w-4xl mx-auto",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "rounded-3xl shadow-neuro-light overflow-hidden",
                  style: { backgroundColor: "var(--bg-main)" },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 p-6 border-b border-white/10", children: [
                      /* @__PURE__ */ jsx("div", {}),
                      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-lg font-semibold",
                          style: { color: "var(--text-header)" },
                          children: "Traditional Savings"
                        }
                      ) }),
                      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-lg font-semibold",
                          style: { color: "var(--text-header)" },
                          children: "Haven"
                        }
                      ) })
                    ] }),
                    COMPARISON_DATA.map((row, index) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.6, delay: index * 0.1 },
                        viewport: { once: true },
                        className: "grid grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-200",
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "font-semibold", style: { color: "var(--text-header)" }, children: row.feature }),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "text-center",
                              style: { color: "var(--text-body)" },
                              children: renderValue(row.traditional)
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "text-center font-semibold",
                              style: { color: "var(--color-success)" },
                              children: renderValue(row.haven)
                            }
                          )
                        ]
                      },
                      index
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 0.6, delay: 0.5 },
                  viewport: { once: true },
                  className: "text-sm text-center mt-6 opacity-70",
                  style: { color: "var(--text-body)" },
                  children: "*Yields are variable and subject to market conditions. Past performance does not guarantee future results."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16", children: [
          {
            title: "Real Yield",
            description: "Earn 3-5% annual yield through secure DeFi strategies",
            icon: "💰"
          },
          {
            title: "Security First",
            description: "Audited smart contracts and established protocols",
            icon: "🔒"
          },
          {
            title: "Easy Access",
            description: "Withdraw your funds instantly at any time",
            icon: "⚡"
          },
          {
            title: "No Complexity",
            description: "Simple interface, no crypto knowledge needed",
            icon: "✨"
          }
        ].map((benefit, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            viewport: { once: true },
            whileHover: { y: -5 },
            className: "text-center p-6 rounded-2xl shadow-neuro-light",
            style: { backgroundColor: "var(--bg-lighter)" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl mb-4", children: benefit.icon }),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-lg font-semibold mb-2",
                  style: { color: "var(--text-header)" },
                  children: benefit.title
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm",
                  style: { color: "var(--text-body)" },
                  children: benefit.description
                }
              )
            ]
          },
          index
        )) })
      ] })
    }
  );
}
const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Audited Smart Contracts",
    description: "All smart contracts are thoroughly audited by leading security firms before deployment."
  },
  {
    icon: DocumentCheckIcon,
    title: "Regulatory Compliance",
    description: "Haven operates in compliance with financial regulations and maintains proper licensing."
  },
  {
    icon: BuildingLibraryIcon,
    title: "Established Protocols",
    description: "Your funds are secured through battle-tested DeFi protocols with proven track records."
  },
  {
    icon: LockClosedIcon,
    title: "Bank-Grade Security",
    description: "Multi-signature wallets and cold storage ensure maximum protection of your assets."
  }
];
function Security() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "security",
      className: "py-20 px-4 md:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "text-3xl md:text-5xl font-bold font-serif mb-6",
                  style: { color: "var(--text-header)" },
                  children: "Security & Trust"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg md:text-xl max-w-3xl mx-auto",
                  style: { color: "var(--text-body)" },
                  children: "Your security is our priority. Haven uses industry-leading security practices to protect your funds."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16", children: securityFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            viewport: { once: true },
            whileHover: { y: -5 },
            className: "flex items-start space-x-6 p-6 rounded-2xl shadow-neuro-light",
            style: { backgroundColor: "var(--bg-lighter)" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex-shrink-0 w-12 h-12 rounded-xl shadow-neuro-light flex items-center justify-center",
                  style: { backgroundColor: "var(--bg-main)" },
                  children: /* @__PURE__ */ jsx(
                    feature.icon,
                    {
                      className: "w-6 h-6",
                      style: { color: "var(--text-header)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-lg font-semibold mb-2",
                    style: { color: "var(--text-header)" },
                    children: feature.title
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-base leading-relaxed",
                    style: { color: "var(--text-body)" },
                    children: feature.description
                  }
                )
              ] })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            viewport: { once: true },
            className: "text-center",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "inline-flex items-center justify-center p-8 rounded-3xl shadow-neuro-light",
                style: { backgroundColor: "var(--bg-main)" },
                children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-3xl font-bold mb-2",
                        style: { color: "var(--text-header)" },
                        children: "$50M+"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-sm opacity-70",
                        style: { color: "var(--text-body)" },
                        children: "Total Value Secured"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-3xl font-bold mb-2",
                        style: { color: "var(--text-header)" },
                        children: "99.9%"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-sm opacity-70",
                        style: { color: "var(--text-body)" },
                        children: "Uptime Guarantee"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-3xl font-bold mb-2",
                        style: { color: "var(--text-header)" },
                        children: "24/7"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-sm opacity-70",
                        style: { color: "var(--text-body)" },
                        children: "Security Monitoring"
                      }
                    )
                  ] })
                ] })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.6 },
            viewport: { once: true },
            className: "text-center mt-12",
            children: /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-lg max-w-2xl mx-auto",
                style: { color: "var(--text-body)" },
                children: "Haven is built on the foundation of trust, transparency, and security. Your peace of mind is our commitment."
              }
            )
          }
        )
      ] })
    }
  );
}
function cn(...inputs) {
  return clsx(inputs);
}
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "faq",
      className: "py-20 px-4 md:px-8",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "text-3xl md:text-5xl font-bold font-serif mb-6",
                  style: { color: "var(--text-header)" },
                  children: "Frequently Asked Questions"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg md:text-xl",
                  style: { color: "var(--text-body)" },
                  children: "Got questions? We've got answers. Find everything you need to know about Haven."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: FAQ_DATA.map((faq, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            viewport: { once: true },
            className: "rounded-2xl shadow-neuro-light overflow-hidden",
            style: { backgroundColor: "var(--bg-main)" },
            children: [
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  onClick: () => toggleFAQ(index),
                  className: "w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200",
                  whileHover: { x: 4 },
                  children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "text-lg font-semibold pr-4",
                        style: { color: "var(--text-header)" },
                        children: faq.question
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ChevronDownIcon$1,
                      {
                        className: cn(
                          "w-5 h-5 transition-transform duration-200 flex-shrink-0",
                          openIndex === index && "rotate-180"
                        ),
                        style: { color: "var(--text-body)" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "px-6 pb-6 border-t border-white/10",
                      style: { backgroundColor: "var(--bg-lighter)" },
                      children: /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "text-base leading-relaxed pt-4",
                          style: { color: "var(--text-body)" },
                          children: faq.answer
                        }
                      )
                    }
                  )
                }
              ) })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            viewport: { once: true },
            className: "text-center mt-16",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "inline-block p-8 rounded-3xl shadow-neuro-light",
                style: { backgroundColor: "var(--bg-lighter)" },
                children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "text-xl font-semibold mb-4",
                      style: { color: "var(--text-header)" },
                      children: "Still have questions?"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-base mb-6",
                      style: { color: "var(--text-body)" },
                      children: "Our team is here to help. Get in touch and we'll answer any questions you have."
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className: "px-6 py-3 rounded-2xl font-semibold shadow-neuro-outset-light hover:shadow-neuro-light transition-all duration-200",
                      style: {
                        backgroundColor: "var(--text-header)",
                        color: "var(--bg-main)"
                      },
                      children: "Contact Support"
                    }
                  )
                ]
              }
            )
          }
        )
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx(
    "footer",
    {
      className: "py-16 px-4 md:px-8 border-t border-white/10",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: true },
              className: "md:col-span-2",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-4", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-xl shadow-neuro-outset-light flex items-center justify-center",
                      style: { backgroundColor: "var(--bg-lighter)" },
                      children: /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "text-xl font-bold font-serif",
                          style: { color: "var(--text-header)" },
                          children: "H"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-2xl font-bold font-serif",
                      style: { color: "var(--text-header)" },
                      children: "Haven"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-base mb-6 max-w-md",
                    style: { color: "var(--text-body)" },
                    children: "The easiest way to grow your savings with real yield. Save simply, earn effortlessly."
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: [
                  { name: "Twitter", href: "https://twitter.com/havenfinance" },
                  { name: "Discord", href: "https://discord.gg/haven" },
                  { name: "GitHub", href: "https://github.com/havenfinance" }
                ].map((social) => /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: social.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.1 },
                    whileTap: { scale: 0.95 },
                    className: "w-10 h-10 rounded-xl shadow-neuro-outset-light flex items-center justify-center hover:shadow-neuro-light transition-all duration-200",
                    style: { backgroundColor: "var(--bg-lighter)" },
                    children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-sm font-medium",
                        style: { color: "var(--text-header)" },
                        children: social.name[0]
                      }
                    )
                  },
                  social.name
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-lg font-semibold mb-4",
                    style: { color: "var(--text-header)" },
                    children: "Product"
                  }
                ),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["How it Works", "Security", "Pricing", "Roadmap"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "text-sm hover:opacity-70 transition-opacity text-left",
                    style: { color: "var(--text-body)" },
                    children: item
                  }
                ) }, item)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-lg font-semibold mb-4",
                    style: { color: "var(--text-header)" },
                    children: "Company"
                  }
                ),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["About", "Blog", "Careers", "Contact"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "text-sm hover:opacity-70 transition-opacity text-left",
                    style: { color: "var(--text-body)" },
                    children: item
                  }
                ) }, item)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            viewport: { once: true },
            className: "flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0", children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-sm",
                    style: { color: "var(--text-body)" },
                    children: "© 2024 Haven Finance. All rights reserved."
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: ["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "text-sm hover:opacity-70 transition-opacity",
                    style: { color: "var(--text-body)" },
                    children: item
                  },
                  item
                )) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-center md:text-right", children: /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-xs opacity-70 max-w-md",
                  style: { color: "var(--text-body)" },
                  children: "Haven is not a bank. Cryptocurrency investments are subject to market risk. Please invest responsibly."
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
}
const meta = () => {
  return [
    { title: "Haven - Save Simply, Earn Effortlessly" },
    { name: "description", content: "A modern way to grow your dollars with real yield—safe, simple, and automatic." }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs(ThemeWrapper, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(WhyHaven, {}),
      /* @__PURE__ */ jsx(Security, {}),
      /* @__PURE__ */ jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BuUrvCdl.js", "imports": ["/assets/index-BZpZPwHN.js", "/assets/components-P9S5umDs.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CjNDDIbu.js", "imports": ["/assets/index-BZpZPwHN.js", "/assets/components-P9S5umDs.js", "/assets/useTheme-CLD3AJVL.js"], "css": ["/assets/root-D6zKI-af.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-B8VyzRi1.js", "imports": ["/assets/index-BZpZPwHN.js", "/assets/useTheme-CLD3AJVL.js"], "css": [] } }, "url": "/assets/manifest-2f3cb6eb.js", "version": "2f3cb6eb" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
