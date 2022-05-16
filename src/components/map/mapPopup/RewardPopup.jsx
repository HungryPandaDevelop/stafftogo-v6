import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const RewardContent = (props) => {

  const closePopup = () => {
    props.ActionFn('SHOW_POPUP', {});
  }

  return (
    <div className="map-popup">

      <div className="main-full">
        <div className="reward-popup active">
          <div
            className="close-popup"
            onClick={closePopup}
          >
          </div>
          <h3>От</h3>
          <input className="input-decorate" type="text" />
          <h3>До</h3>
          <input className="input-decorate" type="text" />
          <h3>В месяц</h3>
        </div>
      </div>

    </div>
  )
}

export default connect(null, { ActionFn })(RewardContent);