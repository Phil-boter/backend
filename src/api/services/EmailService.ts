import LogService from "./LogService";
const secrets = require("../../../secrets.json");
const nodemailer = require("nodemailer");

import { EmailInterface } from "../interfaces/EmailInterface";
import Email from "../models/email.model";


const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com", //replace with your email provider
	port: 587,
	auth: {
		user: secrets.EMAILADDRESS,
		pass: secrets.EMAILPASS,
	},
});

// verify connection configuration
transporter.verify(function (error: any, success: any): any {
	if (error) {
		LogService.logMonitor('EmailService transponder', "verify", "ERROR", `emailservice failed to connenct to transponder`, "");
	} else {
		console.log("Server is ready to take our messages");
		LogService.logMonitor('EmailService transponder', "verify", "Success", `emailservice connected to transponder`, "");
	}
});


class EmailService {
	public async sendNewEmail(data: EmailInterface) {
		try {
			if(!transporter) {
				console.log("no transponder")
				this.reconnect();
			}

			transporter.sendMail(this.createNewEmail(data), (err: any) => {
				if (err) {
					console.log(err);
				} else {
					const answer = true;
					return answer;
				}
			});
			LogService.logMonitor('EmailService.sendMail', "TRANSPONDER", "Success", `email was send to ${data.from}`, "");
		} catch (e) {
			LogService.logMonitor('EmailService.sendMail', "TRANSPONDER", "ERROR", `email was NOT send to ${data.from}`, "");
			throw e;
		}
	}

	private createNewEmail(data: EmailInterface) {
		const newEmail: Email = Email.createEmail(
			secrets.EMAILADDRESS, data.from, data.subject, `${data.from} <${secrets.EMAILADDRESS}> \n${data.text} `, data.created_at
		)
		return newEmail; 
	}

	private reconnect() {
		LogService.logMonitor('EmailService.reconnect', "TRANSPONDER", "Success", `transponder was reconnected}`, "");
		transporter.verify();
	}
}

export default new EmailService();
