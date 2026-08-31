import "../styels/demologin.css";

export function DemoLogin({ onContinue, onClose }) {
  const handleContinue = () => {
    // Demo only — no password is collected
    onContinue("Demo");
  };

  return (
    <div className="login-overlay">

      <div className="login-modal">

        {/* Header */}
        <div className="login-header">
          <div className="x-logo">𝕏</div>

          <h2>Log in With X</h2>

          <button
            className="close-login"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="login-body">

          <h1>
            Log in to your X account to connect to
            <br />
            BGMI MOBILE.
          </h1>

          {/* App information */}
          <div className="app-info">

            <div className="app-icon">
              🎮
            </div>

            <div>
              <h3>BGMI MOBILE</h3>
              <p>WINNER WINNER CHICKEN DINNER!</p>
              <span>Official Gaming Demo</span>
            </div>

          </div>

          {/* Demo username */}
          <label>Demo X Username</label>

          <input
            type="text"
            value="demo_user"
            readOnly
            className="username-input"
          />

          {/* Password - intentionally not collected */}
          <div className="password-wrapper">

            <input
              type="password"
              placeholder="Password"
              disabled
            />

            <span>
              Not collected
            </span>

          </div>

          <p className="security-note">
            🔐 Real X passwords are never requested or sent to this website.
          </p>

          {/* Continue */}
          <button
            className="continue-button"
            onClick={handleContinue}
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
}