import { nanoid } from "nanoid"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className="feedback-btns__list">
            <li className="feedback-btns__item">
              <button id={nanoid()} className="feedback-btn" onClick={() => onLeaveFeedback("good")}>Good</button>
            </li>
            <li className="feedback-btns__item">
              <button id={nanoid()} className="feedback-btn" onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            </li>
            <li className="feedback-btns__item">
              <button id={nanoid()} className="feedback-btn" onClick={() => onLeaveFeedback("bad")}>Bad</button>
            </li>
          </ul>
  )
}