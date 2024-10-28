'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';

const items = ['light', 'dark', 'system'];

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={'flex gap-2'}>
      {items.map((item) => (
        <Button
          key={item}
          onClick={() => setTheme(item)}
          className={'capitalize'}
          color={theme === item ? 'primary' : 'default'}
          size={'sm'}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
