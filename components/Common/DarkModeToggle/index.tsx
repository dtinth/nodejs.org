import React from 'react';
import { useTheme } from 'next-themes';
import { FormattedMessage } from 'react-intl';
import {
  MdLightMode as IconLightMode,
  MdNightlight as IconDarkMode,
} from 'react-icons/md';
import styles from './index.module.scss';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  const toggleTheme = (isKeyPress?: boolean) => {
    if (isKeyPress) {
      return;
    }

    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={styles.darkModeToggle}
      onClick={() => toggleTheme()}
      onKeyPress={() => toggleTheme(true)}
      aria-pressed={isDark}
    >
      <span className="sr-only">
        <FormattedMessage id="components.header.buttons.toggleDarkMode" />
      </span>
      <IconDarkMode className="light-mode-only" />
      <IconLightMode className="dark-mode-only" />
    </button>
  );
};

export default DarkModeToggle;
