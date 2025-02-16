"use client"

import {Providers} from "@/app/Providers";
import React from "react";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nodejs SPA</title>
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
