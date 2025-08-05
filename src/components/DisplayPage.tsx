import Priority from '../types/Priority';
import type EmailType from '../types/Email';
import Email from './Email';
import { useQuery } from '@tanstack/react-query';
import '../styles/DisplayPage.css';

interface Props {
    priority: Priority;
}

export default function DisplayPage(props: Props) {
    function getQueryUrl(priority: Priority): string {
        let priorityInUrl = '';
        if (priority === Priority.LOW) {
            priorityInUrl = 'low';
        } else if (priority === Priority.MEDIUM) {
            priorityInUrl = 'medium';
        } else {
            priorityInUrl = 'high';
        }
        return `http://localhost:8000/api/priorities/${priorityInUrl}`;
    }
    const { isPending, error, data } = useQuery({
        queryKey: [`${props.priority}PriorityEmails`],
        queryFn: () => fetch(getQueryUrl(props.priority)).then(res => res.json()),
        retry: false,
        staleTime: 5000, // refetch after 5 minutes
    });

    if (isPending) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const emails = data as EmailType[];

    const emailsToDisplay = emails.map((email, index: number) =>
        <Email link={email.link}
               time_sent={email.time_sent}
               sent_from={email.sent_from}
               subject={email.subject}
               priority={email.priority}
               key={index}
        />);
    if (emailsToDisplay.length === 0) {
        return <p>No emails to display!</p>;
    }
    const displayPageClassname = `display-page ${props.priority}`;
    const header = `${props.priority} priority emails`;
    return (
        <div className={displayPageClassname}>
            <h1>{header}</h1>
            {emailsToDisplay}
        </div>
    );
}