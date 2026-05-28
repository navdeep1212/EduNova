'use client';

import React, { useEffect } from 'react';
import { RefreshCw, AlertOctagon } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#070913] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
        <AlertOctagon className="w-8 h-8" />
      </div>
      
      <h2 className="text-2xl font-black text-white tracking-tight mb-2">
        System Interface Error
      </h2>
      
      <p className="text-slate-400 text-sm max-w-md mb-8">
        An unexpected error occurred in the dashboard engine: <span className="text-brand-orange font-semibold">{error.message || 'Unknown code anomaly'}</span>.
      </p>

      <button
        onClick={() => reset()}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-bg-deep font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
      >
        <RefreshCw className="w-4 h-4" />
        Reinitialize Dashboard
      </button>
    </div>
  );
}
