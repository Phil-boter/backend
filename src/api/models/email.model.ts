import { EmailInterface } from "../interfaces/EmailInterface";

class Email {
    public to: string;
    public from: string;
    public subject: string | undefined;
    public text: string | undefined;
    public created_at: Date;

    constructor(
        to: string,
        from: string,
        subject: string,
        text: string,
        created_at: Date
    ) {
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.created_at = created_at;
    }

    public static createEmail(to: string, from: string, subject: string, text: string, created_at: Date) {
        return new Email(
            to,
            from,
            subject,
            text,
            created_at
        )
    }
}

export default Email;