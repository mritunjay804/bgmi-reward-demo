import "./processingAccount.css";

export function ProcessingAccount({ onLogout }) {
  return (
    <section className="processing-account">

      <div className="processing-header">
        <h2>Processing Account</h2>
      </div>

      <div className="processing-content">
        <p>
          Thank you for joining the BGMI MOBILE Event
        </p>

        <p>
          Your account is being processed to receive your reward.
        </p>

        <p>
          Please wait up to 24 hours.
        </p>

        <div className="processing-sign">
          - BGMI MOBILE
        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

    </section>
  );
}