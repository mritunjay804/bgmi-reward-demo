import "./rewardCard.css";

function RewardCard({ image, title, quantity, extra, onCollect }) {
  return (
    <div className="reward-card">
      <div className="reward-image">
        <img src={image} alt={title} />

        {extra && (
          <div className="free-badge">
            <span>FREE</span>
            <strong>{extra}</strong>
          </div>
        )}
      </div>

      <div className="reward-content">
        <h3>{title}</h3>

        <div className="reward-quantity">{quantity}</div>
      </div>

      <button
        className="collect-button"
        onClick={() =>
          onCollect({
            image,
            title,
            quantity,
            extra,
          })
        }
      >
        Collect
      </button>
    </div>
  );
}

export default RewardCard
