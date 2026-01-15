
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<Props> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl serif font-medium tracking-tight leading-snug ${className}`}>
    {children}
  </h2>
);

export const Subtitle: React.FC<Props> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl font-light text-slate-400 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Label: React.FC<Props> = ({ children, className = '' }) => (
  <span className={`text-xs uppercase tracking-[0.2em] font-medium text-slate-500 ${className}`}>
    {children}
  </span>
);
