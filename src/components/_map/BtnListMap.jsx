import { connect } from 'react-redux';
import ActionFn from 'store/actions';


const BtnListMap = (props) => {
  const { idpopup, children } = props;
  const showPopup = () => {
    props.ActionFn('SHOW_POPUP', Number(idpopup));
  }

  return (
    <button
      className="btn btn--crystal btn--list"
      onClick={showPopup}
    >
      <span>{children}</span><i></i>
    </button>
  )


};


const mapStateToProps = (state) => {
  return {
    state: state
  }
};

export default connect(mapStateToProps,
  {
    ActionFn
  })(BtnListMap);