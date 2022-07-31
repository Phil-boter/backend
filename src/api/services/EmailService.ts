import db from "../../database/ProjectDatabase";
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
	} else {
		console.log("Server is ready to take our messages");
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
		} catch (e) {
			throw e;
		}
	}
}

export default new EmailService();
