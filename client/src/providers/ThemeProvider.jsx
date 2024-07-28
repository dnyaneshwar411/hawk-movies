import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage"
import useTheme from "../hooks/useTheme";

export default function ThemeProvider({ children }) {
  const { data, onInvokedValue } = useLocalStorage("theme");
  const { toggleTheme } = useTheme(onInvokedValue);

  useEffect(function () {
    // data?.success ? toggleTheme(data.theme) : toggleTheme("light");
  }, [data, toggleTheme])

  return <>
    {children}
  </>
};