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
            return await db.saveStatusLog(method, action, status, log_message, params);
		} catch (e) {
			throw e;
		}
	}
}

export default new LogService();