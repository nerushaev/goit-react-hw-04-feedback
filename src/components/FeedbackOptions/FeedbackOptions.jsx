import { nanoid } from "nanoid"
import propTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  const elements = keys.map((key) => {
    const result = key.charAt(0).toUpperCase() + key.slice(1)
    return <li key={nanoid()} className="feedback-btns__item">
              <button className="feedback-btn" onClick={() => onLeaveFeedback(key)}>{result}</button>
            </li>
  })
  return (
    <ul className="feedback-btns__list">
      {elements}
          </ul>
  )
}

FeedbackOptions.propTypes = {
  options: propTypes.object,
  onLeaveFeedback: propTypes.func
}