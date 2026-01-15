
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<Props> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-5xl serif font-medium tracking-tight leading-tight text-white ${className}`}>
    {children}
  </h2>
);

export const Subtitle: React.FC<Props> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl font-light text-white/80 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Label: React.FC<Props> = ({ children, className = '' }) => (
  <span className={`text-xs uppercase tracking-[0.3em] font-bold text-[#4ade80] ${className}`}>
    {children}
  </span>
);
