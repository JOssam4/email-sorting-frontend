import { useQuery } from '@tanstack/react-query';
import DisplayPage from './DisplayPage';
import Priority from '../types/Priority'
import type EmailType from '../types/Email';
export default function EmailsPage() {
    const { isPending, error, data } = useQuery({
        queryKey: ['emails'],
        queryFn: () => fetch('http://localhost:8000/analyze_emails').then(res => res.json()),
        retry: false,
    })

    if (isPending) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }
    function coerceDataType(data: unknown): EmailType[] {
        return data as EmailType[];
    }

    const emails = coerceDataType(data);

    const lowPriorityEmails = emails.filter(email => email.priority === Priority.LOW);
    const mediumPriorityEmails = emails.filter(email => email.priority === Priority.MEDIUM);
    const highPriorityEmails = emails.filter(email => email.priority === Priority.HIGH);
    return (
        <div className="display-page-wrapper">
            <DisplayPage priority={Priority.LOW} emails={lowPriorityEmails} />
            <DisplayPage priority={Priority.MEDIUM} emails={mediumPriorityEmails} />
            <DisplayPage priority={Priority.HIGH} emails={highPriorityEmails} />
        </div>
    )
}
