import React from 'react';
import { LayoutDashboard, Smartphone, Server, ShieldCheck, Settings, BookOpen } from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function Sidebar({ currentTab, setCurrentTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'devices', label: 'Honor Fleet', icon: Smartphone },
    { id: 'siem', label: 'SIEM Integration', icon: Server },
    { id: 'compliance', label: 'ISO 27001', icon: ShieldCheck },
    { id: 'docs', label: 'Documentation', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 h-screen flex flex-col">
      <div className="p-6">
        <h1 className="font-display font-bold text-xl text-emerald-400 tracking-tight flex items-center gap-2">
          <ShieldCheck className="w-6 h-6" />
          HonorGuard Bridge
        </h1>
        <p className="text-xs text-slate-500 font-mono mt-1">v2.1.4_SIEM_REL</p>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-sm font-medium ${
              currentTab === item.id
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 m-4 bg-slate-950 rounded-lg border border-slate-800/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-slate-300">SYSTEM ACTIVE</span>
        </div>
        <p className="text-[10px] text-slate-500 font-mono leading-tight">
          Live log forwarding to SIEM enabled. ISO 27001 auditing active.
        </p>
      </div>
    </div>
  );
}
