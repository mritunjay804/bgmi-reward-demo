import { useState } from "react";
import "./reward.css";

import { DemoLogin } from "./demologin";
import RewardCard from "./rewardCard";
import { RewardConfirmation } from "./RewardConfirmation";

import reward1 from "../images/reward1.png";
import reward2 from "../images/reward2.png";

export function Rewards() {
  // Selected reward
  const [selectedReward, setSelectedReward] = useState(null);

  // Login screen
  const [showLogin, setShowLogin] = useState(false);

  // When Collect button is clicked
  const handleCollect = (reward) => {
    setSelectedReward(reward);
  };

  // Close confirmation modal
  const closeModal = () => {
    setSelectedReward(null);
  };

  // Confirm reward
  const confirmReward = () => {
    setSelectedReward(null);
    setShowLogin(true);
  };

  // Show demo login
  if (showLogin) {
    return (
      <DemoLogin
        onContinue={() => {
          console.log("Continue to demo verification");
        }}
      />
    );
  }

  return (
    <section className="rewards">

      {/* Event Heading */}
      <div className="event-heading">
        LIMITED TIME EVENT HURRY
      </div>

      <h2>UP!</h2>

      {/* Reward Cards */}
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

      {/* Confirmation Modal */}
      <RewardConfirmation
        reward={selectedReward}
        onClose={closeModal}
        onConfirm={confirmReward}
      />

    </section>
  );
}