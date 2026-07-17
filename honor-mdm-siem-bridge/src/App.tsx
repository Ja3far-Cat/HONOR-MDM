import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Devices } from './components/Devices';
import { SiemConfigPanel } from './components/SiemConfig';
import { Compliance } from './components/Compliance';
import { Documentation } from './components/Documentation';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'devices':
        return <Devices />;
      case 'siem':
        return <SiemConfigPanel />;
      case 'compliance':
        return <Compliance />;
      case 'docs':
        return <Documentation />;
      case 'settings':
        return <div className="p-8 text-slate-400">Settings configuration panel coming soon.</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

