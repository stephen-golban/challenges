import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: Readonly<ReactNode>;
  screen?: boolean;
  className?: string;
}

export const Center = ({ children, screen = false, className = '' }: Props) => {
  return (
    <div className={twMerge('flex flex-grow items-center justify-center', screen && 'min-h-screen', className)}>
      {children}
    </div>
  );
};
