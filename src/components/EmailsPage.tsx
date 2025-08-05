import { Link } from 'react-router';
import '../styles/EmailsPage.css';

export default function EmailsPage() {
    return (
        <div id="emails-page">
            <Link
                to="/emails/priority/low"
                className="link link-low"
            >
                Low Priority
            </Link>
            <Link
                to="/emails/priority/medium"
                className="link link-medium"
            >
                Medium Priority
            </Link>
            <Link
                to="/emails/priority/high"
                className="link link-high"
            >
                High Priority
            </Link>
        </div>
    );
};
