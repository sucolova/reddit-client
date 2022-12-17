
export const Loading = (props) => {
  const fetchState = props.fetchState
  return (
    <div className="loading">
      <h4 className="pink">{fetchState}</h4>
      <h4 className="yellow">{fetchState}</h4>
      <h4 className="green">{fetchState}</h4>
      <h4 className="cyan">{fetchState}</h4>
      <h4 className="orange">{fetchState}</h4>
    </div>
  )
}
