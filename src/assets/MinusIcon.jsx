const MinusIcon = ({ onClick, className }) => (
  <button onClick={onClick} className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon" // Added class
      viewBox="0 0 24 24"
    >
      <path d="M19,13H5V11H19V13Z" />
    </svg>
  </button>
);

export default MinusIcon;
