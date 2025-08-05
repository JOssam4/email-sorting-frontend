import { Link } from "react-router";
export default function EmailsPage() {
    return (
        <div className="display-page-wrapper">
            <Link to="/emails/priority/low">Low Priority Emails</Link>
            <Link to="/emails/priority/medium">Medium Priority Emails</Link>
            <Link to="/emails/priority/high">High Priority Emails</Link>
        </div>
    )
}
