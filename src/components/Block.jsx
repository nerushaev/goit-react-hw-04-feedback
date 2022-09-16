export default function Block({title, children}) {
  return (
          <div className="feedback-wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  )
}