import * as React from "react";

export default function Icon({ children }: { children: React.ReactNode }) {
  return <div className="md:text-4xl text-2xl">{children}</div>;
}
