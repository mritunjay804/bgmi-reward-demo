import "../styels/rewardConformation.css";

export function RewardConfirmation({
  reward,
  onClose,
  onConfirm
}) {
  if (!reward) return null;

  return (
    <div className="confirmation-overlay">

      <div className="confirmation-modal">

        {/* Header */}
        <div className="confirmation-header">
          <h2>Reward Confirmation</h2>

          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Content */}
        <div className="confirmation-content">

          <h3>
            Are you sure to collect this reward?
          </h3>

          {/* Reward Image */}
          <div className="confirmation-image">
            <img
              src={reward.image}
              alt={reward.title}
            />
          </div>

          {/* Collect */}
          <button
            className="confirmation-collect"
            onClick={onConfirm}
          >
            Collect
          </button>

        </div>

      </div>

    </div>
  );
}