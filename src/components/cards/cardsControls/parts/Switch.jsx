import { useState } from 'react'

const Switch = () => {
  const [showsMarkerType, setShowMarkerType] = useState(true);
  return (
    <div className="controls-contaiener col-4 vertical-align">
      <div
        className={`switch-container ${showsMarkerType ? 'switch-btn--active' : ''}`}
        onClick={() => { setShowMarkerType(!showsMarkerType) }}
      >
        <span>Резюме</span>
        <div className="switch-btn switch-btn--white">
          <i></i>
        </div>
        <span>Вакансии</span>
      </div>
    </div>
  )
}

export default Switch
