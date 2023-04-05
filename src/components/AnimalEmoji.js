export default function AnimalEmoji({ children }) {
  return (
    <span className="animal-emoji" aria-hidden="true">
      {children}
    </span>
  );
}
