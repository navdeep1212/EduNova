'use client';

import React from 'react';
import { FolderOpen, FileText, Download, Code2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResourceItem {
  id: string;
  name: string;
  type: string;
  size: string;
  category: 'documentation' | 'code' | 'video';
  desc: string;
}

export default function ResourcesView() {
  const resources: ResourceItem[] = [
    {
      id: '1',
      name: 'Advanced_React_Patterns_Handbook.pdf',
      type: 'PDF Document',
      size: '4.8 MB',
      category: 'documentation',
      desc: 'Syllabus and reference sheets covering React 19 architecture, virtualization, and rendering paradigms.',
    },
    {
      id: '2',
      name: 'React_Virtual_Grid_Boilerplate.zip',
      type: 'Code Template',
      size: '1.2 MB',
      category: 'code',
      desc: 'Starter repository with Tailwind CSS v4, Framer Motion, and ESLint configurations pre-installed.',
    },
    {
      id: '3',
      name: 'DSA_Interview_Cheat_Sheet_v2.pdf',
      type: 'PDF Document',
      size: '2.5 MB',
      category: 'documentation',
      desc: 'A comprehensive study summary of hash tables, binary search trees, and heap mechanics.',
    },
    {
      id: '4',
      name: 'UI_UX_Dashboard_Mockup_Assets.fig',
      type: 'Figma Design file',
      size: '15.4 MB',
      category: 'documentation',
      desc: 'High-fidelity vectors, style templates, and prototyping guides matching the dashboard visual theme.',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'code':
        return Code2;
      case 'video':
        return Play;
      default:
        return FileText;
    }
  };

  return (
    <div className="p-6 lg:p-10 w-full max-w-4xl mx-auto space-y-8 select-none">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tight">STUDY RESOURCES</h2>
        <p className="text-slate-400 text-xs mt-1">Download manuals, starter code repositories, and cheat sheets.</p>
      </div>

      <div className="space-y-4">
        {resources.map((item, index) => {
          const Icon = getCategoryIcon(item.category);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-5 bg-slate-950/40 border border-slate-900/60 hover:border-slate-800 p-4.5 rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-900 flex items-center justify-center text-brand-cyan group-hover:text-white transition-colors duration-300">
                <Icon className="w-5.5 h-5.5" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 space-y-0.5">
                <h4 className="text-sm font-bold text-slate-200 truncate group-hover:text-brand-cyan transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 font-bold">{item.type} · {item.size}</p>
                <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
              </div>

              {/* Download Trigger */}
              <button className="w-10 h-10 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-brand-cyan/40 hover:text-brand-cyan text-slate-400 flex items-center justify-center transition-all duration-300">
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
