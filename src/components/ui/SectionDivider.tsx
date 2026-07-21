'use client';

import React from 'react';

export default function SectionDivider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 pointer-events-none" aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
