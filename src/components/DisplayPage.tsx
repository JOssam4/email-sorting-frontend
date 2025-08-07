import Priority from '../types/Priority';
import type EmailType from '../types/Email';
import Email from './Email';
import { useQuery } from '@tanstack/react-query';
import { PuffLoader } from 'react-spinners';
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


    const displayPageClassname = `display-page ${props.priority}`;
    const header = `${props.priority} priority emails`;

    if (isPending) {
        return (
            <div className={displayPageClassname}>
                <PuffLoader color={'white'} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={displayPageClassname}>
                <h2>{error.message}</h2>
            </div>
        );
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

    return (
        <div className={displayPageClassname}>
            <h1>{header}</h1>
            {isPending && <PuffLoader color={'white'} />}
            {emailsToDisplay.length === 0 && (
                <h2>No emails!</h2>
            )}
            {emailsToDisplay.length > 0 && emailsToDisplay}
        </div>
    );
}
