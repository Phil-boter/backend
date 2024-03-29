import LogService from "./LogService";
const secrets = require("../../../secrets.json");
const nodemailer = require("nodemailer");


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
		console.log(error);
		LogService.logMonitor('EmailService transponder', "verify", "ERROR", `emailservice failed to connenct to transponder`, "");
	} else {
		console.log("Server is ready to take our messages");
		LogService.logMonitor('EmailService transponder', "verify", "Success", `emailservice connected to transponder`, "");
	}
});

export interface Email {
	from: string;
	to?: string;
	subject?: string;
	text: string;
	created_at: number;
}

class EmailService {
	public async sendNewEmail(data: Email) {
		try {
			if(!transporter) {
				console.log("no transponder")
				this.reconnect();
			}
			const mail: Email = {
				to: secrets.EMAILADDRESS,
				from: data.from,
				subject: data.subject,
				text: `${data.from} <${secrets.EMAILADDRESS}> \n${data.text} `,
				created_at: data.created_at,
			};

			transporter.sendMail(mail, (err: any) => {
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

	private reconnect() {
		LogService.logMonitor('EmailService.reconnect', "TRANSPONDER", "Success", `transponder was reconnected}`, "");
		transporter.verify();
	}
}

export default new EmailService();
