function Options({ hasFeedback, updateFeedback, resetFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {hasFeedback && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

export default Options;
