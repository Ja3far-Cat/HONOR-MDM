import { Device, LogEntry, LogVolumeData, SiemConfig } from './types';

export const mockDevices: Device[] = [
  { id: 'HON-9823-A', model: 'Honor Magic 6 Pro', osVersion: 'MagicOS 8.0', user: 'j.smith@company.com', status: 'active', lastSync: '2 mins ago', ipAddress: '10.0.45.12' },
  { id: 'HON-1124-B', model: 'Honor 90', osVersion: 'MagicOS 7.1', user: 'a.jones@company.com', status: 'active', lastSync: '5 mins ago', ipAddress: '10.0.45.88' },
  { id: 'HON-4492-C', model: 'Honor Magic V2', osVersion: 'MagicOS 7.2', user: 'm.chen@company.com', status: 'offline', lastSync: '3 hours ago', ipAddress: '10.0.22.104' },
  { id: 'HON-5511-D', model: 'Honor 200 Pro', osVersion: 'MagicOS 8.0', user: 's.williams@company.com', status: 'quarantined', lastSync: '1 min ago', ipAddress: '10.0.12.9' },
  { id: 'HON-7733-E', model: 'Honor Magic 6 RSR', osVersion: 'MagicOS 8.0', user: 't.baker@company.com', status: 'active', lastSync: 'Just now', ipAddress: '10.0.45.112' },
];

export const mockLogVolume: LogVolumeData[] = [
  { time: '00:00', authLogs: 120, systemLogs: 450, networkLogs: 300 },
  { time: '04:00', authLogs: 80, systemLogs: 200, networkLogs: 150 },
  { time: '08:00', authLogs: 550, systemLogs: 800, networkLogs: 600 },
  { time: '12:00', authLogs: 480, systemLogs: 750, networkLogs: 580 },
  { time: '16:00', authLogs: 410, systemLogs: 820, networkLogs: 650 },
  { time: '20:00', authLogs: 200, systemLogs: 400, networkLogs: 350 },
  { time: '24:00', authLogs: 90, systemLogs: 300, networkLogs: 250 },
];

export const mockRecentLogs: LogEntry[] = [
  { id: 'log-1029', timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(), deviceId: 'HON-9823-A', level: 'info', category: 'auth', message: 'Successful biometric authentication' },
  { id: 'log-1030', timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), deviceId: 'HON-5511-D', level: 'critical', category: 'system', message: 'Root access attempt blocked by MDM policy' },
  { id: 'log-1031', timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), deviceId: 'HON-1124-B', level: 'warning', category: 'network', message: 'Connection to untrusted public Wi-Fi detected' },
  { id: 'log-1032', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), deviceId: 'HON-4492-C', level: 'error', category: 'app', message: 'Unauthorized sideloaded application prevented from launching' },
];

export const mockSiemConfig: SiemConfig = {
  provider: 'splunk',
  endpointUrl: 'https://http-inputs-company.splunkcloud.com/services/collector',
  apiKey: '••••••••••••••••••••••••••••',
  status: 'connected',
  lastPing: '45ms',
};
