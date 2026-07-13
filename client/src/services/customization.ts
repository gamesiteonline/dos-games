/**
 * Advanced Customization Service
 * User themes, preferences, accessibility, and personalization
 */

export type ThemeMode = 'light' | 'dark' | 'auto';
export type AccessibilityLevel = 'normal' | 'enhanced' | 'maximum';

export interface UserCustomization {
  userId: number;
  theme: ThemeMode;
  accentColor: string;
  fontSize: number; // 12-20px
  fontFamily: string;
  accessibility: AccessibilityLevel;
  reducedMotion: boolean;
  highContrast: boolean;
  screenReaderOptimized: boolean;
  colorBlindMode: 'none' | 'deuteranopia' | 'protanopia' | 'tritanopia';
  compactMode: boolean;
  customLayout: boolean;
  savedFilters: SavedFilter[];
  shortcuts: KeyboardShortcut[];
}

export interface SavedFilter {
  id: string;
  name: string;
  filters: Record<string, any>;
  icon: string;
}

export interface KeyboardShortcut {
  action: string;
  key: string;
  modifier: ('ctrl' | 'alt' | 'shift')[];
}

/**
 * Theme configurations
 */
export const THEME_CONFIGS = {
  light: {
    name: 'Light',
    colors: {
      background: '#ffffff',
      foreground: '#000000',
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#ec4899',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      background: '#1a1a1a',
      foreground: '#ffffff',
      primary: '#60a5fa',
      secondary: '#a78bfa',
      accent: '#f472b6',
    },
  },
  auto: {
    name: 'Auto (System)',
    colors: {},
  },
};

/**
 * Accent color options
 */
export const ACCENT_COLORS = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Green', value: '#10b981' },
  { name: 'Cyan', value: '#06b6d4' },
];

/**
 * Font options
 */
export const FONT_OPTIONS = [
  { name: 'System', value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
  { name: 'Serif', value: 'Georgia, serif' },
  { name: 'Monospace', value: '"Courier New", monospace' },
  { name: 'Comic Sans', value: '"Comic Sans MS", cursive' },
];

/**
 * Keyboard shortcuts
 */
export const DEFAULT_SHORTCUTS: KeyboardShortcut[] = [
  { action: 'search', key: 'k', modifier: ['ctrl'] },
  { action: 'home', key: 'h', modifier: ['alt'] },
  { action: 'games', key: 'g', modifier: ['alt'] },
  { action: 'profile', key: 'p', modifier: ['alt'] },
  { action: 'settings', key: 's', modifier: ['alt'] },
  { action: 'theme-toggle', key: 't', modifier: ['ctrl'] },
  { action: 'notifications', key: 'n', modifier: ['ctrl'] },
];

/**
 * Accessibility presets
 */
export const ACCESSIBILITY_PRESETS = {
  normal: {
    fontSize: 16,
    reducedMotion: false,
    highContrast: false,
    screenReaderOptimized: false,
    colorBlindMode: 'none' as const,
  },
  enhanced: {
    fontSize: 18,
    reducedMotion: true,
    highContrast: true,
    screenReaderOptimized: true,
    colorBlindMode: 'none' as const,
  },
  maximum: {
    fontSize: 20,
    reducedMotion: true,
    highContrast: true,
    screenReaderOptimized: true,
    colorBlindMode: 'deuteranopia' as const,
  },
};

/**
 * Color blind simulation filters
 */
export const COLOR_BLIND_FILTERS = {
  none: 'none',
  deuteranopia: 'url(#deuteranopia-filter)', // Red-Green (most common)
  protanopia: 'url(#protanopia-filter)', // Red-Green
  tritanopia: 'url(#tritanopia-filter)', // Blue-Yellow
};

/**
 * Get default customization
 */
export function getDefaultCustomization(userId: number): UserCustomization {
  return {
    userId,
    theme: 'auto',
    accentColor: '#3b82f6',
    fontSize: 16,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    accessibility: 'normal',
    reducedMotion: false,
    highContrast: false,
    screenReaderOptimized: false,
    colorBlindMode: 'none',
    compactMode: false,
    customLayout: false,
    savedFilters: [],
    shortcuts: DEFAULT_SHORTCUTS,
  };
}

/**
 * Apply customization to DOM
 */
export function applyCustomization(customization: UserCustomization): void {
  const root = document.documentElement;

  // Apply theme
  if (customization.theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else if (customization.theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
  }

  // Apply accent color
  root.style.setProperty('--accent-color', customization.accentColor);

  // Apply font size
  root.style.setProperty('--font-size-base', `${customization.fontSize}px`);

  // Apply font family
  root.style.setProperty('--font-family', customization.fontFamily);

  // Apply accessibility settings
  if (customization.reducedMotion) {
    root.classList.add('reduce-motion');
  } else {
    root.classList.remove('reduce-motion');
  }

  if (customization.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }

  if (customization.screenReaderOptimized) {
    root.classList.add('sr-optimized');
  } else {
    root.classList.remove('sr-optimized');
  }

  if (customization.compactMode) {
    root.classList.add('compact-mode');
  } else {
    root.classList.remove('compact-mode');
  }

  // Apply color blind filter
  if (customization.colorBlindMode !== 'none') {
    root.style.filter = COLOR_BLIND_FILTERS[customization.colorBlindMode];
  } else {
    root.style.filter = 'none';
  }
}

/**
 * Save customization to localStorage
 */
export function saveCustomization(customization: UserCustomization): void {
  localStorage.setItem(
    `customization-${customization.userId}`,
    JSON.stringify(customization)
  );
}

/**
 * Load customization from localStorage
 */
export function loadCustomization(userId: number): UserCustomization {
  const stored = localStorage.getItem(`customization-${userId}`);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse customization:', e);
    }
  }
  return getDefaultCustomization(userId);
}

/**
 * Create saved filter
 */
export function createSavedFilter(
  name: string,
  filters: Record<string, any>,
  icon: string = '⭐'
): SavedFilter {
  return {
    id: `filter-${Date.now()}`,
    name,
    filters,
    icon,
  };
}

/**
 * Dashboard layout customization
 */
export interface DashboardLayout {
  columns: number;
  cardSize: 'small' | 'medium' | 'large';
  showStats: boolean;
  showRecommendations: boolean;
  showCommunity: boolean;
  widgets: string[];
}

export const DEFAULT_DASHBOARD_LAYOUT: DashboardLayout = {
  columns: 3,
  cardSize: 'medium',
  showStats: true,
  showRecommendations: true,
  showCommunity: true,
  widgets: ['stats', 'recommendations', 'trending', 'community', 'achievements'],
};

/**
 * Keyboard shortcut handler
 */
export function registerKeyboardShortcuts(
  shortcuts: KeyboardShortcut[],
  handlers: Record<string, () => void>
): void {
  document.addEventListener('keydown', (event) => {
    for (const shortcut of shortcuts) {
      const modifiersMatch =
        shortcut.modifier.includes('ctrl') === event.ctrlKey &&
        shortcut.modifier.includes('alt') === event.altKey &&
        shortcut.modifier.includes('shift') === event.shiftKey;

      if (modifiersMatch && event.key.toLowerCase() === shortcut.key.toLowerCase()) {
        event.preventDefault();
        handlers[shortcut.action]?.();
      }
    }
  });
}

/**
 * Accessibility announcements
 */
export function announceToScreenReader(message: string): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Focus management
 */
export function manageFocus(element: HTMLElement): void {
  element.focus();
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * High contrast mode CSS
 */
export const HIGH_CONTRAST_CSS = `
  .high-contrast {
    --text-color: #000;
    --bg-color: #fff;
    --border-color: #000;
  }
  
  .high-contrast * {
    border-width: 2px !important;
  }
`;

/**
 * Reduced motion CSS
 */
export const REDUCED_MOTION_CSS = `
  .reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
`;
