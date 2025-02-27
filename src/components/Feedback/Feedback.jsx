function Feedback({ good, neutral, bad, total }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {total > 0 && (
        <>
          <p>Total: {total}</p>
          <p>Positive: {Math.round(((good + neutral) / total) * 100)}%</p>
        </>
      )}
    </>
  );
}

export default Feedback;
