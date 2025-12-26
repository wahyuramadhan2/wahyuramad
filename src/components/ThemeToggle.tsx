import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full bg-secondary/50 text-muted-foreground">
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            theme === "dark" 
              ? "rotate-0 scale-100 opacity-100" 
              : "rotate-90 scale-0 opacity-0"
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            theme === "dark" 
              ? "-rotate-90 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
