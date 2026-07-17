import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockLogVolume, mockRecentLogs } from '../data';
import { Activity, AlertTriangle, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <header className="mb-8">
        <h2 className="text-3xl font-display font-semibold text-white">System Overview</h2>
        <p className="text-slate-400 mt-1">Real-time log ingestion and SIEM forwarding metrics.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Logs Forwarded (24h)" value="1.24M" trend="+12%" icon={Activity} color="emerald" />
        <MetricCard title="Active Honor Devices" value="8,492" trend="+3" icon={CheckCircle} color="blue" />
        <MetricCard title="Critical Alerts" value="14" trend="-2" icon={ShieldAlert} color="rose" />
        <MetricCard title="Avg SIEM Latency" value="45ms" trend="stable" icon={Clock} color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-6">Log Volume Telemetry</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockLogVolume} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSystem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                  itemStyle={{ fontSize: 12 }}
                />
                <Area type="monotone" dataKey="systemLogs" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSystem)" />
                <Area type="monotone" dataKey="authLogs" stroke="#10b981" fillOpacity={1} fill="url(#colorAuth)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <h3 className="text-lg font-medium text-white mb-4">Recent Critical Events</h3>
          <div className="flex-1 overflow-y-auto space-y-4">
            {mockRecentLogs.map((log) => (
              <div key={log.id} className="p-3 bg-slate-950 rounded border border-slate-800/50 flex gap-3">
                <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${log.level === 'critical' ? 'bg-rose-500' : log.level === 'error' ? 'bg-orange-500' : log.level === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                <div>
                  <p className="text-sm text-slate-200">{log.message}</p>
                  <div className="flex items-center gap-2 mt-2 font-mono text-[10px] text-slate-500">
                    <span>{log.deviceId}</span>
                    <span>•</span>
                    <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon: Icon, color }: any) {
  const colorClasses = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-400">{title}</p>
        <p className="text-3xl font-display font-semibold text-white mt-2">{value}</p>
        <p className={`text-xs mt-2 font-medium ${trend.startsWith('+') || trend === 'stable' ? 'text-emerald-400' : 'text-rose-400'}`}>
          {trend} from yesterday
        </p>
      </div>
      <div className={`p-4 rounded-full border ${colorClasses[color as keyof typeof colorClasses]}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}
