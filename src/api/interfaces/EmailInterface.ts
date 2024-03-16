export interface EmailInterface {
	to: string;
	from: string;
	subject: string;
	text: string;
	created_at: Date;
}