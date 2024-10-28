import { ReactNode } from "react";

export const Container = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <section className={"container mx-auto px-2 py-3 lg:px-4"}>
      {children}
    </section>
  );
};
