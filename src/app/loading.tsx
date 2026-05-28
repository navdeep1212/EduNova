import React from 'react';

export default function Loading() {
  return (
    <div className="flex h-screen bg-[#070913]">
      {/* Sidebar Skeleton (Visible on desktop/tablet) */}
      <aside className="hidden md:flex flex-col h-screen bg-[#090b14]/90 border-r border-slate-900 w-20 lg:w-64 p-4 space-y-6 shrink-0">
        <div className="h-10 w-32 bg-slate-900 rounded-lg animate-pulse hidden lg:block" />
        <div className="h-10 w-10 bg-slate-900 rounded-lg animate-pulse lg:hidden" />
        <div className="flex-1 space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-11 w-full bg-slate-900/60 rounded-xl animate-pulse" />
          ))}
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header Skeleton */}
        <div className="h-20 border-b border-slate-900/40 px-6 lg:px-10 flex items-center justify-between">
          <div className="h-10 w-64 bg-slate-900/80 rounded-xl animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-slate-900/80 rounded-xl animate-pulse" />
            <div className="h-10 w-10 bg-slate-900/80 rounded-xl animate-pulse" />
            <div className="h-10 w-10 bg-slate-900/80 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Bento Grid Skeleton */}
        <div className="grid grid-cols-12 gap-6 p-6 lg:p-10 w-full max-w-7xl mx-auto">
          {/* Row 1: Welcome Skeleton */}
          <div className="col-span-12 lg:col-span-7 h-[340px] bg-[#0d1222]/30 border border-slate-900/50 rounded-3xl p-6 flex flex-col justify-between animate-pulse">
            <div className="space-y-4">
              <div className="h-4 w-28 bg-slate-900 rounded-full" />
              <div className="h-8 w-48 bg-slate-900 rounded-lg" />
              <div className="h-6 w-32 bg-slate-900 rounded-lg" />
            </div>
            <div className="flex justify-between items-end">
              <div className="h-12 w-32 bg-slate-900 rounded-xl" />
              <div className="h-12 w-44 bg-slate-900 rounded-xl" />
            </div>
          </div>

          {/* Row 1: Activity Grid Skeleton */}
          <div className="col-span-12 lg:col-span-5 h-[340px] bg-[#0d1222]/30 border border-slate-900/50 rounded-3xl p-6 flex flex-col justify-between animate-pulse">
            <div className="h-4 w-40 bg-slate-900 rounded-full" />
            <div className="h-40 bg-slate-900/40 rounded-xl" />
            <div className="h-4 w-32 bg-slate-900 rounded-full" />
          </div>

          {/* Row 2: Course Card Skeletons */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 h-[220px] bg-[#0d1222]/30 border border-slate-900/50 rounded-3xl p-6 flex flex-col justify-between animate-pulse">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-5 w-16 bg-slate-900 rounded-full" />
                  <div className="h-8 w-8 bg-slate-900 rounded-lg" />
                </div>
                <div className="h-6 w-44 bg-slate-900 rounded-lg" />
                <div className="h-4 w-24 bg-slate-900 rounded-lg" />
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-900 rounded-full" />
                <div className="flex justify-between">
                  <div className="h-6 w-20 bg-slate-900 rounded-full" />
                  <div className="h-6 w-24 bg-slate-900 rounded-full" />
                </div>
              </div>
            </div>
          ))}

          {/* Row 3: Weekly Activity Skeleton */}
          <div className="col-span-12 lg:col-span-8 h-[300px] bg-[#0d1222]/30 border border-slate-900/50 rounded-3xl p-6 animate-pulse" />

          {/* Row 3: Upcoming Events Skeleton */}
          <div className="col-span-12 lg:col-span-4 h-[300px] bg-[#0d1222]/30 border border-slate-900/50 rounded-3xl p-6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
