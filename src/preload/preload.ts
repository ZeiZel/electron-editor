import { contextBridge } from 'electron';
import { loggerToLog } from '../main/api';

contextBridge.exposeInMainWorld('API', {
	logger: loggerToLog
})