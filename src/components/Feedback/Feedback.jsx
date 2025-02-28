function Feedback({ data: { good, neutral, bad, total, positive } }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {total > 0 && (
        <>
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
        </>
      )}
    </>
  );
}

export default Feedback;
