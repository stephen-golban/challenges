import { Header } from "@/components";
import { getDictionary } from "@/dictionaries";

import type { ReactNode } from "react";
import type { Locale } from "@/dictionaries";

export default async function LanguageLayout({
  children,
  params: { lang },
}: Readonly<{ children: ReactNode; params: { lang: Locale } }>) {
  const dict = await getDictionary(lang);

  const navItems = [
    { label: dict.nav.home, href: `/${lang}` },
    { label: dict.nav.about, href: `/${lang}/about` },
  ];

  return (
    <section className="flex flex-col">
      <Header data={navItems} />
      <main className="relative flex-grow">{children}</main>
    </section>
  );
}
