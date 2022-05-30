import List from "components/cards/List"
import CardsControls from 'components/cards/cardsControls/CardsControls';

function Catalog() {
  return (
    <div>
      <CardsControls />
      <div className="main-full">
        <div className="breadcrumbs"><a href="#">Главная</a><span>/</span>
          <a href="#">Категория</a><span>/</span><span>Резюме список</span></div>
      </div>
      <div className="content">
        <div className="main-full">
          <h1>Резюме список</h1>
        </div>
        <div className="main-grid">
          <div className="col-10">
            <List />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
