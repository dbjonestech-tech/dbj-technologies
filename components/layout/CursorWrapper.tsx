"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () =>
    import("@/components/effects/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

export function CursorWrapper() {
  return <CustomCursor />;
}