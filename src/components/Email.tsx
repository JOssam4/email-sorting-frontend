import type EmailType from '../types/Email.ts';
import '../styles/Email.css';

function Email(props: EmailType) {

    return (
        <>
            <div className="email">
                <div className="email-content">
                    <div className="top-row">
                        <a href={props.link}>{props.subject}</a>
                        <p>{props.time_sent.toString()}</p>
                    </div>
                    <div className="bottom-row">
                        <p>Sent from {props.sent_from}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Email;