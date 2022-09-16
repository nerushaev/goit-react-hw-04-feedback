import React, { Component } from 'react'
import './Feedback.css'
import Block from './Block';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics'
import NotificationMessage from './NotificationMessage';


export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (propertyName) => {
    this.setState((prev) => {
      const value = prev[propertyName];
      return {
        [propertyName]: value + 1,
      }
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    if (!total) {
      return 0;
    }

    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  }

  resetStatistics = () => {
    this.setState({
    good: 0,
    neutral: 0,
    bad: 0,
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
      <Block title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
      </Block>
      <Block title="Statistics">
          {!total ? <NotificationMessage message="No votes yet..." /> : 
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percentage} reset={this.resetStatistics}/>
          }
      </Block>
      </>
  )
  }
}
