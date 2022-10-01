import propTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage, reset }) {
    return (
      <div>
        <ul className="feedback-results__list">
          <li className="feedback-results__item">Good: {good}</li>
          <li className="feedback-results__item">Neutral: {neutral}</li>
          <li className="feedback-results__item">Bad: {bad}</li>
          <li className="feedback-results__item">Total: {total}</li>
          <li className="feedback-results__item">Positive feedback: {positivePercentage}%</li>
        </ul>
        <button className="feedback-btn" onClick={reset}>Reset</button>
      </div>
    )
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
  reset: propTypes.func,
}