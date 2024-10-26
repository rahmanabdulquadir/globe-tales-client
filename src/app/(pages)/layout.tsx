import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/provider/theme-provider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <main className="layout_container">{children}</main>
      </ThemeProvider>
    </>
  );
};

export default layout;
