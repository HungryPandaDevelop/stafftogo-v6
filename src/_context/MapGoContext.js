import { createContext, useState } from "react"

const MapGoContext = createContext()

export const MapProvider = ({children}) =>{
  


  // Попап фильтров верх
  const [statePopupMap, setStatePopupMap] = useState({
    show: false,
    id: 0
  })

  const onShowPopupMap = (i)=>{
    setStateRewardPopup(false)
    setStatePopupMap({
      show: true,
      id: i
    })
  }
  const onClosePopupMap = ()=>{
    setStateRewardPopup(false)
    setStatePopupMap({
      show: false,
      id: ''
    })
  }


  const [stateRewardPopup, setStateRewardPopup] = useState(false)

  const onShowReward = ()=>{
    
    onClosePopupMap()
    setStateRewardPopup(!stateRewardPopup)
  }

   // Попап фильтров верх

  // Специализация сотрудника выборка чекнутых

  const [profActive, setProfActive] = useState([]);

  const onClickCheckProf = (item, i) => {
    const checked = (profActive.includes(item))
    setProfActive(
      (prev) => checked ? prev.filter(sc => sc !== item) : [...prev, item]
    )
  }

  // Специализация сотрудника выборка чекнутых

  // Сфера деятельности выборка чекнутых

  const [scopeActive, setScopeActive] = useState([])

  const onClickCheckScope = (item, i) => {
    const checked = (scopeActive.includes(item))
    console.log(checked)
    setScopeActive(
      (prev) => checked ? prev.filter(sc => sc !== item) : [...prev, item]
    )
  }

  // Сфера деятельности выборка чекнутых

  // Показать попап человека/ работодателя

  const [clientPopupShowState, setClientPopupShowState] = useState(0);

  const clientPopupShow = () => {
    setClientPopupShowState(true)
  }
  const clientPopupHide = () => {
    setClientPopupShowState(false)
  }

  const [indexPeople, setIndexPeople] = useState(null)

  const choiseIndexPeople = (index)=>{
    setIndexPeople(index)
    clientPopupShow()
  }

   // Показать попап человека/ работодателя

     // Тип маршрута
  const [routeTypeState, setRouteTypeState] = useState(0)

  const onChangeTypeState = (index) => {
    setRouteTypeState(index)
  }


  // Тип маршрута

  return(
    <MapGoContext.Provider 
      value={{
        routeTypeState,
        onChangeTypeState,
        statePopupMap,
        onShowPopupMap,
        onClosePopupMap,
        profActive,
        scopeActive,
        onClickCheckProf,
        onClickCheckScope,
        stateRewardPopup,
        onShowReward,
        clientPopupShowState,
        setClientPopupShowState,
        clientPopupShow,
        clientPopupHide,
        indexPeople, 
        setIndexPeople,
        choiseIndexPeople
        }}>
      {children}
    </MapGoContext.Provider>
  )
}

export default MapGoContext