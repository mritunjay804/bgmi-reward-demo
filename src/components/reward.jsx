import { useState } from "react";
import "./reward.css";

import { DemoLogin } from "./demologin";
// import { AccountVerification } from "../pages/accountVerification";
import AccountVerification from "../pages/accountVerification";

import RewardCard from "./rewardCard";
import { RewardConfirmation } from "./RewardConfirmation";

import reward1 from "../images/reward1.png";
import reward2 from "../images/reward2.png";

export function Rewards() {
  const [selectedReward, setSelectedReward] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  // Collect button
  const handleCollect = (reward) => {
    setSelectedReward(reward);
  };

  // Close confirmation
  const closeModal = () => {
    setSelectedReward(null);
  };

  // Confirmation → Demo Login
  const confirmReward = () => {
    setShowLogin(true);
  };

  // Demo Login → Verification
  const handleLoginContinue = (provider) => {
    console.log("Demo login provider:", provider);

    setShowLogin(false);
    setShowVerification(true);
  };

  // Verification page
  if (showVerification) {
    return (
      <AccountVerification
        reward={selectedReward}
        onComplete={() => {
          console.log("Verification completed");
          setSelectedReward(null);
          setShowVerification(false);
        }}
      />
    );
  }

  // Demo Login page
  if (showLogin) {
    return (
      <DemoLogin
        onContinue={handleLoginContinue}
      />
    );
  }

  return (
    <section className="rewards">

      <div className="event-heading">
        LIMITED TIME EVENT HURRY
      </div>

      <h2>UP!</h2>

      <div className="reward-container">

        <RewardCard
          image={reward1}
          title="UP Series Reward"
          quantity="10"
          onCollect={handleCollect}
        />

        <RewardCard
          image={reward2}
          title="UC Reward"
          quantity="6000+"
          extra="2100"
          onCollect={handleCollect}
        />

      </div>

      <RewardConfirmation
        reward={selectedReward}
        onClose={closeModal}
        onConfirm={confirmReward}
      />

    </section>
  );
}