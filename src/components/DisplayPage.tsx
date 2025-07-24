import Priority from '../types/Priority';
import type EmailType from '../types/Email';
import Email from './Email';
import '../styles/DisplayPage.css';

interface Props {
    priority: Priority;
    emails: EmailType[];
}

export default function DisplayPage(props: Props) {
    const emailsToDisplay = props.emails.map((email, index: number) =>
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
    return (
        <div className={displayPageClassname}>
            {emailsToDisplay}
        </div>
    );
}