import { useEffect } from "react"
import { get } from "../state/user.slice";
import { store } from "../state/store";
import ThemeProvider from "./ThemeProvider";

export default function Init({ children }) {
  useEffect(function () {
    store.dispatch(get());
  }, []);

  return <ThemeProvider>
    {children}
  </ThemeProvider>
};