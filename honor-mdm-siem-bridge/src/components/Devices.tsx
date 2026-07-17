import React from 'react';
import { mockDevices } from '../data';
import { Search, Filter, MoreVertical, Smartphone } from 'lucide-react';

export function Devices() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-display font-semibold text-white">Honor Fleet</h2>
          <p className="text-slate-400 mt-1">Manage corporate Honor devices and log collection status.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search devices..." 
              className="bg-slate-900 border border-slate-800 text-sm text-slate-200 rounded-md pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/50 border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500 font-semibold">
              <th className="px-6 py-4">Device</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">OS Version</th>
              <th className="px-6 py-4">IP Address</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Sync</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {mockDevices.map((device) => (
              <tr key={device.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-md text-slate-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{device.model}</p>
                      <p className="text-xs text-slate-500 font-mono">{device.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">{device.user}</td>
                <td className="px-6 py-4 text-sm text-slate-400">{device.osVersion}</td>
                <td className="px-6 py-4 text-sm text-slate-400 font-mono">{device.ipAddress}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                    ${device.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      device.status === 'quarantined' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
                      'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${device.status === 'active' ? 'bg-emerald-500' : device.status === 'quarantined' ? 'bg-rose-500' : 'bg-slate-500'}`}></span>
                    {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">{device.lastSync}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-500 hover:text-slate-300 p-1 rounded-md hover:bg-slate-800">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
