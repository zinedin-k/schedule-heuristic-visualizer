import { Inter } from "next/font/google";
import "./globals.css";
import { ClassScheduleContextProvider } from "@/context/scheduleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedule visualizer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClassScheduleContextProvider>
        <body className={inter.className}>{children}</body>
      </ClassScheduleContextProvider>
    </html>
  );
}
