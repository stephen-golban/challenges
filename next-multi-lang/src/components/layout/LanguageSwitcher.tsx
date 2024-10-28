"use client";

import { usePathname, useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { Button, ButtonGroup } from "@nextui-org/react";

const items = ["en", "ro"];

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1];

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    setCookie("NEXT_LOCALE", locale);
    router.push(newPathname);
  };

  return (
    <ButtonGroup>
      {items.map((item) => (
        <Button
          key={item}
          size="sm"
          onClick={() => switchLanguage(item)}
          color={currentLang === item ? "primary" : "default"}
        >
          {item.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
};
