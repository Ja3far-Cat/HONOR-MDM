export type DeviceStatus = 'active' | 'offline' | 'quarantined';
export type LogLevel = 'info' | 'warning' | 'error' | 'critical';

export interface Device {
  id: string;
  model: string;
  osVersion: string;
  user: string;
  status: DeviceStatus;
  lastSync: string;
  ipAddress: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  deviceId: string;
  level: LogLevel;
  category: 'auth' | 'network' | 'system' | 'app';
  message: string;
}

export interface LogVolumeData {
  time: string;
  authLogs: number;
  systemLogs: number;
  networkLogs: number;
}

export interface SiemConfig {
  provider: 'splunk' | 'qradar' | 'datadog' | 'elk';
  endpointUrl: string;
  apiKey: string;
  status: 'connected' | 'disconnected' | 'error';
  lastPing: string;
}
