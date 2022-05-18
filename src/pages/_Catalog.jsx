import { Link } from 'react-router-dom';


const Catalog = () => {

  return (
    <div className="content">

      <div className="main-grid">
        <div className="col-12">
          <h1>Каталог</h1>
        </div>
        <div className="col-6">
          <h2>
            <Link to="/catalog/resume">Резюме</Link>
          </h2>
        </div>
        <div className="col-6">
          <h2>
            <Link to="/catalog/vacancies">Вакансии</Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Catalog
