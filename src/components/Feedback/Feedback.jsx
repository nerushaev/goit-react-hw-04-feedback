import React, { useState } from 'react'
import './Feedback.css'
import Block from '../Block/Block';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics'
import NotificationMessage from '../Notification/NotificationMessage';


const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (propertyName) => {
    switch (propertyName) {
      case "good":
        return setGood((prev) => prev + 1);
      case "neutral":
        return setNeutral((prev) => prev + 1);
      case "bad":
        return setBad((prev) => prev + 1);
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }

    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  }

  const resetStatistics = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

    const total = countTotalFeedback();
    const percentage = countPositiveFeedbackPercentage();
    const options = { good, neutral, bad }
  
    return (
      <>
        <Block
          title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback} />
      </Block>
        <Block
          title="Statistics">
          {!total ? <NotificationMessage
            message="No votes yet..." /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
              reset={resetStatistics} />
          }
      </Block>
      </>
  )
}

export default Feedback;
