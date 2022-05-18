import { Link } from "react-router-dom";
const LeftBtnContainer = () => {
  return (
    <>
      <div className="left-btn-container">
        <Link className="btn btn--crystal btn-search" to="/map/">Карта</Link>
        <Link className="btn btn--crystal" to="/catalog/">Список</Link>
      </div>
    </>
  )
}

export default LeftBtnContainer
