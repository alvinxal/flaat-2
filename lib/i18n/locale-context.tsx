"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { IDict } from "./dictionaries/id";
import idDict from "./dictionaries/id";
import enDict from "./dictionaries/en";

type LocaleCtx = {
  locale: Locale;
  dict: IDict;
};

const Ctx = createContext<LocaleCtx>({ locale: "id", dict: idDict });

export function useLocale() {
  return useContext(Ctx).locale;
}

export function useDict() {
  return useContext(Ctx).dict;
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const dict = locale === "en" ? enDict : idDict;
  return <Ctx.Provider value={{ locale, dict }}>{children}</Ctx.Provider>;
}
