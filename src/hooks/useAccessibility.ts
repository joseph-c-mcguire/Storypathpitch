import { useState, useEffect } from 'react';
import type { AccessibilitySettings } from '@/app/components/AccessibilityPanel';

const DEFAULT_SETTINGS: AccessibilitySettings = {
  theme: 'light',
  fontSize: 'medium',
  colorBlindMode: 'none',
  fontFamily: 'default'
};

export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));

    // Apply settings to document
    const root = document.documentElement;

    // Apply theme
    root.setAttribute('data-theme', settings.theme);

    // Apply font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      'extra-large': '20px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Apply font family
    const fontFamilyMap = {
      default: '',
      'sans-serif': 'Arial, Helvetica, sans-serif',
      dyslexic: 'OpenDyslexic, Comic Sans MS, sans-serif'
    };
    if (settings.fontFamily !== 'default') {
      root.style.fontFamily = fontFamilyMap[settings.fontFamily];
    } else {
      root.style.fontFamily = '';
    }

    // Apply color blind mode
    root.setAttribute('data-colorblind', settings.colorBlindMode);

  }, [settings]);

  return { settings, setSettings };
}