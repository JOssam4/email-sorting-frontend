import type EmailType from '../types/Email.ts';
import '../styles/Email.css';

function Email(props: EmailType) {

    return (
        <>
            <div className="email-card">
                <a href={props.link}>{props.subject}</a>
                <div className="email-info">
                    <span className="label">From:</span> {props.sent_from}
                </div>
                <div className="email-info">
                    <span className="label">Sent:</span> {props.time_sent.toLocaleString()}
                </div>
            </div>
        </>
    );
}

export default Email;