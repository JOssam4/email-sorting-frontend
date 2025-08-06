import '../styles/WelcomeScreen.css';

const WelcomeScreen = () => {
    const handleGoogleSignIn = () => {
        // Replace this with your real OAuth2 logic
        window.location.href = 'http://localhost:8000/login'
    };

    return (
        <div className="welcome-container">
            <div className="welcome-box">
                <h1>Welcome to Email Sorter</h1>
                <p>Automatically organize and categorize your inbox.</p>
                <button className="google-btn" onClick={handleGoogleSignIn}>
          <span className="google-icon">
            <img
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                alt="Google Logo"
            />
          </span>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default WelcomeScreen;
