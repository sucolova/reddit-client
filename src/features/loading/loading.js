
export const Loading = (props) => {
  const fetchState = props.fetchState
  return (
    <div className="loading">
      <h4>... {fetchState}</h4>
    </div>
  )
}
