import "../styels/demologin.css";
import loginBanner from "../images/login-banner.png";

export function DemoLogin({ onContinue }) {
  return (
    <section className="demo-login">
      <div className="login-box">
        {/* Demo Background / Banner */}
        <div className="login-banner">
          <img src={loginBanner} alt="Gaming Event" />

          <div className="login-logo">
            BATTLEGROUNDS
            <span>MOBILE INDIA</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="social-buttons">
          <button className="social-btn x-btn" onClick={onContinue}>
            <i className="bi bi-twitter-x"></i>
            <span>Twitter</span>
          </button>

          <button className="social-btn facebook-btn" onClick={onContinue}>
            <i className="bi bi-facebook"></i>
            <span>Facebook</span>
          </button>

          <button className="social-btn google-btn" onClick={onContinue}>
            <i className="bi bi-google-play"></i>
            <span>Gplay</span>
          </button>
        </div>

        {/* Demo Notice */}
        <div className="demo-notice">
          <p>This is a demonstration login.</p>

          <p>No real account credentials are collected.</p>
        </div>

        {/* Continue */}
        <button className="login-continue" onClick={onContinue}>
          Continue
        </button>
      </div>
    </section>
  );
}
