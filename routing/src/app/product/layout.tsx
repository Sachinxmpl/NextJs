import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
            <h1>this is a banner for layout .tsx</h1>
            {children}
    </>
  );
}
