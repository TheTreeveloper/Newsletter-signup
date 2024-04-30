export const TextContent = () => {
  return (
    <div className="text-container">
      <h1>Stay Updated!</h1>
      <p> Join 60,000+ product managers receiving monthly updates on:</p>

      <div className="list">
        <div className="checkmark">
          <img
            src="./public/images/icon-list.svg"
            alt="check mark"
            className="check-icon"
          />
          <img
            src="./public/images/icon-list.svg"
            alt="check mark"
            className="check-icon-2"
          />
          <img
            src="./public/images/icon-list.svg"
            alt="check mark"
            className="check-icon-3"
          />
        </div>
        <div className="list-items">
          <p>Product discovery and building what matters</p>
          <p>Measuring to ensure updates are a success</p>
          <p>And much more!</p>
        </div>
      </div>
    </div>
  );
};
