import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode() {
  // eslint-disable-next-line no-undef
  const [theme, setTheme] = useLocalStorage('dark');
  const colorTheme = theme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  });
  return [colorTheme, setTheme];
}
