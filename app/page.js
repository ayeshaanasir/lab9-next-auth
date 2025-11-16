import AuthButtons from "./components/AuthButtons";

export default function Home() {
  return (
    <div className="home-page">
      <h1>NEXT.js Authentication Demo</h1>
      <div className="welcome-section">
        <h2>Welcome to Authentication Demo</h2>
        <p>Sign in using any provider below</p>
        
        <div className="features">
          <div className="feature-card">
            <h3> Secure Authentication</h3>
            <p>Login with Google or GitHub securely using NextAuth.js</p>
          </div>
          <div className="feature-card">
            <h3> Responsive Design</h3>
            <p>Works perfectly on desktop, tablet, and mobile devices</p>
          </div>
          <div className="feature-card">
            <h3> User Profile</h3>
            <p>See your name and profile picture when logged in</p>
          </div>
        </div>
        
        <AuthButtons />
      </div>
    </div>
  );
}