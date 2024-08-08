import type { NextComponentType, NextPageContext } from "next";
import type { AppType } from "next/app";
import type { Router } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "@/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps,
  router,
}: {
  Component: NextComponentType<NextPageContext, unknown, unknown>;
  pageProps: object;
  router: Router;
}) => {
  useEffect(() => {
    const style = `
    font-size: 20px;
    font-weight: 900;
    color: #84cc16;
    `;
    console.info("%c Welcome to my website!", style);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
      </Head>
      <main
        className={`dark ${GeistSans.variable} ${GeistMono.variable} flex-y max-h-screen min-h-screen w-full cursor-crosshair overflow-hidden font-sans antialiased`}
      >
        <div className="flex-y relative min-h-screen w-full bg-white text-white bg-grid-lime-600 dark:bg-black dark:bg-grid-lime-500/[0.2]">
          <AnimatePresence key={router.route} mode="wait">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default MyApp;
