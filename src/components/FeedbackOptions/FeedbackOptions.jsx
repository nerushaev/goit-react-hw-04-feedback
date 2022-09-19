import { nanoid } from "nanoid"

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
            {/* <li className="feedback-btns__item">
              <button id={nanoid()} className="feedback-btn" onClick={() => onLeaveFeedback("good")}>Good</button>
            </li>
            <li className="feedback-btns__item">
              <button id={nanoid()} className="feedback-btn" onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            </li>
            <li className="feedback-btns__item">
              <button id={nanoid()} className="feedback-btn" onClick={() => onLeaveFeedback("bad")}>Bad</button>
            </li> */}
          </ul>
  )
}