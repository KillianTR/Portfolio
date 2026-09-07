import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Idioma: 'es' (Castellano) o 'ca' (Català)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("killiantr_lang") || "es";
  });

  // Tema: 'dark' o 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("killiantr_theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("killiantr_lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("killiantr_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "light") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "ca" : "es"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

