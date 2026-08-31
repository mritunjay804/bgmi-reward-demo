import { useState } from "react";
import "./accountVerification.css";

function AccountVerification({ reward, onSubmit }) {
  const [playerId, setPlayerId] = useState("");
  const [phone, setPhone] = useState("");
  const [accountLevel, setAccountLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!playerId || !phone || !accountLevel) {
      alert("Please fill all fields");
      return;
    }

    const demoData = {
      demoPlayerId: playerId,
      demoPhone: phone,
      accountLevel: Number(accountLevel),
      rewardSelected: reward?.title || "Demo Reward",
      loginProvider: "Demo",
    };

    console.log("Demo submission:", demoData);

    if (onSubmit) {
      onSubmit(demoData);
    }
  };

  return (
    <section className="verification-page">

      <div className="verification-title">
        <h2>Account Verification</h2>
      </div>

      <div className="verification-content">

        <h3>Please re-verify your account</h3>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Player ID</label>

            <input
              type="text"
              placeholder="Enter Player ID"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter demo phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Account Level</label>

            <input
              type="number"
              placeholder="Enter account level"
              value={accountLevel}
              onChange={(e) => setAccountLevel(e.target.value)}
            />
          </div>

          <p className="demo-warning">
            Demo only — do not enter passwords, OTPs, or
            social-media credentials.
          </p>

          <button type="submit">
            Verification
          </button>

        </form>

      </div>

    </section>
  );
}
export default AccountVerification;