import type { Metadata } from "next";

import "@/styles/globals.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import Header from "@/components/organisms/Header";
import { RecipeProvider } from "@/context/RecipeContext";

export const metadata: Metadata = {
  title: "Cooking Platform",
  description: "This proyect is a cooking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <RecipeProvider>{children}</RecipeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
