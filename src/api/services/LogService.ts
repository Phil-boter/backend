import db from "../../database/DatabaseConnection";

export interface LogMessage {
    method: string;
    action: string;
    status: string;
    log_message: string;
    params: string;
}

class LogService {
	public async logMonitor(method: string, action: string, status: string, log_message: string, params: string): Promise<LogMessage>  {
		try {
            await this.cleanStatusLogs();
            return await db.saveStatusLog(method, action, status, log_message, params);
		} catch (e) {
			throw e;
		}
	}

    private async cleanStatusLogs(): Promise<void> {
        try {
            await db.cleanStatusLogs();
            return db.saveStatusLog('cleanStatusLogs', 'DELETE', 'success', 'logs older 7 days were deleted', '')
         
		} catch (e) {
            db.saveStatusLog('cleanStatusLogs', 'DELETE', 'ERROR', 'failed to delete logs older 7 days', '')
			throw e;
		}
    }
}

export default new LogService();