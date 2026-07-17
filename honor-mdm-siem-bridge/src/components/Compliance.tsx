import React from 'react';
import { ShieldCheck, FileText, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

export function Compliance() {
  const controls = [
    {
      id: 'A.12.4.1',
      title: 'Event Logging',
      description: 'Event logs recording user activities, exceptions, faults and information security events shall be produced, kept and regularly reviewed.',
      status: 'compliant',
      evidence: 'All Honor devices enforce system, app, and network logging sent to SIEM.'
    },
    {
      id: 'A.12.4.2',
      title: 'Protection of Log Information',
      description: 'Logging facilities and log information shall be protected against tampering and unauthorized access.',
      status: 'compliant',
      evidence: 'Logs are encrypted in transit via TLS 1.3 and forwarded immutably to centralized SIEM.'
    },
    {
      id: 'A.12.4.3',
      title: 'Administrator and Operator Logs',
      description: 'System administrator and system operator activities shall be logged and the logs protected and regularly reviewed.',
      status: 'compliant',
      evidence: 'MDM admin actions are recorded and sent to the SIEM via audit trail.'
    },
    {
      id: 'A.12.4.4',
      title: 'Clock Synchronization',
      description: 'The clocks of all relevant information processing systems within an organization or security domain shall be synchronized to a single reference time source.',
      status: 'warning',
      evidence: 'NTP sync is enforced on devices, but 3 devices report drift > 2 seconds.'
    }
  ];

  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500 max-w-5xl">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-display font-semibold text-white">ISO 27001 Audit Readiness</h2>
          <p className="text-slate-400 mt-1">Compliance mapping for Annex A.12.4 (Logging and Monitoring).</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
          <FileText className="w-4 h-4" />
          Export Report
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-between col-span-2">
          <div>
            <p className="text-sm font-medium text-slate-400">Overall Logging Compliance</p>
            <div className="flex items-end gap-3 mt-2">
              <span className="text-4xl font-display font-bold text-emerald-400">98%</span>
              <span className="text-sm text-emerald-400/70 mb-1">Pass Rate</span>
            </div>
          </div>
          <ShieldCheck className="w-12 h-12 text-emerald-500/20" />
        </div>
      </div>

      <div className="space-y-4">
        {controls.map((control) => (
          <div key={control.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 pt-1">
              {control.status === 'compliant' ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              ) : control.status === 'warning' ? (
                <AlertCircle className="w-6 h-6 text-amber-400" />
              ) : (
                <Circle className="w-6 h-6 text-slate-600" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300">
                  {control.id}
                </span>
                <h3 className="text-lg font-medium text-white">{control.title}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">{control.description}</p>
              
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/50">
                <p className="text-xs font-mono text-slate-500 mb-1 uppercase tracking-wider">Automated Evidence</p>
                <p className="text-sm text-slate-300">{control.evidence}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
