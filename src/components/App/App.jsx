import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";
import { readFromLocalStorage, writeToLocalStorage } from "../../js/utils";

function App() {
  const localStorageKey = "feedback";

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedback.good + feedback.neutral + feedback.bad;

  // Restore feedback value on mounting
  useEffect(() => {
    const storedValue = readFromLocalStorage(localStorageKey);
    if (storedValue != null) setFeedback(storedValue);
  }, []);

  // Save to local storage any feedback, except default
  useEffect(() => {
    if (total > 0) writeToLocalStorage(localStorageKey, feedback);
  }, [total, feedback]);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    localStorage.removeItem(localStorageKey);
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />

      <Options
        hasFeedback={total > 0}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />

      {total > 0 ? (
        <Feedback
          data={{
            ...feedback,
            total: total,
            positive: Math.round(
              ((feedback.good + feedback.neutral) / total) * 100
            ),
          }}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
