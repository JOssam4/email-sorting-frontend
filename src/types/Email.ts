import Priority from './Priority';

interface EmailType {
    link: string;
    time_sent: Date;
    sent_from: string;
    subject: string;
    priority: Priority;
}

export type { EmailType as default };