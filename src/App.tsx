import './styles/App.css'
import {useQuery} from '@tanstack/react-query';
import DisplayPage from './components/DisplayPage';
import Priority from "./types/Priority.ts";
import type EmailType from './types/Email.ts';

function App() {
    const { isPending, error, data } = useQuery({
        queryKey: ['emails'],
        queryFn: () => fetch('http://localhost:8000/analyze_emails').then(res => res.json())
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
    // const mediumPriorityEmails = emails.filter(email => email.priority === Priority.MEDIUM);
    // const highPriorityEmails = emails.filter(email => email.priority === Priority.HIGH);
    return (
        <div className="display-page-wrapper">
            <DisplayPage priority={Priority.LOW} emails={lowPriorityEmails} />
{/*            <DisplayPage priority={Priority.MEDIUM} emails={mediumPriorityEmails} />
            <DisplayPage priority={Priority.MEDIUM} emails={highPriorityEmails} />*/}
        </div>
    )
}

export default App
