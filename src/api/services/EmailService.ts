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

interface Email {
	from: string;
	subject?: string;
	to: string;
	text: string;
	created_at: number;
}

class EmailService {
	public async sendNewEmail(data: Email) {
		console.log(data);
		try {
			const mail: Email = {
				from: data.from,
				to: secrets.EMAILADDRESS,
				subject: data.subject,
				text: `${data.from} <${data.to}> \n${data.text} `,
				created_at: Date.now(),
			};

			//3.
			transporter.sendMail(mail, (err: any) => {
				if (err) {
					console.log(err);
					return new Error("email was not send");
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
