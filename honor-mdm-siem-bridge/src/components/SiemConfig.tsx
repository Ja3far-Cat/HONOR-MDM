import React, { useState } from 'react';
import { mockSiemConfig } from '../data';
import { Server, ShieldAlert, Key, Save, RefreshCw } from 'lucide-react';

export function SiemConfigPanel() {
  const [config, setConfig] = useState(mockSiemConfig);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <header className="mb-8">
        <h2 className="text-3xl font-display font-semibold text-white">SIEM Integration</h2>
        <p className="text-slate-400 mt-1">Configure continuous log forwarding to your centralized security platform.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-medium text-white border-b border-slate-800 pb-4">Connection Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">SIEM Provider</label>
                <select 
                  value={config.provider}
                  onChange={(e) => setConfig({...config, provider: e.target.value as any})}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-emerald-500/50"
                >
                  <option value="splunk">Splunk Enterprise / Cloud</option>
                  <option value="qradar">IBM QRadar</option>
                  <option value="datadog">Datadog Security</option>
                  <option value="elk">Elastic Security (ELK)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">HEC Endpoint URL</label>
                <div className="relative">
                  <Server className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="url" 
                    value={config.endpointUrl}
                    onChange={(e) => setConfig({...config, endpointUrl: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-emerald-500/50 font-mono text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Authentication Token / API Key</label>
                <div className="relative">
                  <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="password" 
                    value={config.apiKey}
                    onChange={(e) => setConfig({...config, apiKey: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-emerald-500/50 font-mono text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
              <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Test Connection
              </button>
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50"
              >
                {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {isSaving ? 'Saving...' : 'Save Configuration'}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Status</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <RefreshCw className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <p className="text-lg font-medium text-white">Connected</p>
                <p className="text-xs text-slate-500">Latency: {config.lastPing}</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
            <div className="flex gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-amber-400">TLS Required</h4>
                <p className="text-xs text-amber-400/80 mt-1 leading-relaxed">
                  For ISO 27001 compliance, ensure the SIEM endpoint uses TLS 1.2 or higher. Data is transmitted securely over encrypted channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
