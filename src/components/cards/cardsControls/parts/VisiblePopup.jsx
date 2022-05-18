import AlphabetPopup from "../popupControls/AlphabetPopup";
import RewardPopup from "../popupControls/RewardPopup";
import ExtraFilter from "../popupControls/ExtraFilter";

const VisiblePopup = ({ idVisible, showPopupControls }) => {
  console.log('in id', idVisible)
  const choisePopup = (id) => {
    switch (id) {
      case 1:
        return <AlphabetPopup id="specialization" idAction="SPECIALIZATION" showPopupControls={showPopupControls} />
      case 2:
        return <AlphabetPopup id="industry" idAction="INDUSTRY" showPopupControls={showPopupControls} />
      case 3:
        return <RewardPopup showPopupControls={showPopupControls} />
      case 4:
        return <ExtraFilter showPopupControls={showPopupControls} />
    }
  }

  return (
    <>
      {choisePopup(idVisible)}
    </>
  );

}

export default VisiblePopup;