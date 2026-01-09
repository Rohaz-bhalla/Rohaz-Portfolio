"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

/* Client-only loader */
const RealmLoader = dynamic(
  () => import("@/components/RealmLoader"),
  { ssr: false }
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RealmLoader />
      {children}
      <ChatWidget />
      <Footer />
    </>
  );
}
