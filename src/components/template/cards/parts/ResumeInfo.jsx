import { Link } from 'react-router-dom';

const CardsInfo = ({ name, education, exp, priceFrom, priceTo, link }) => {
  return (
    <div className="resume-info">
      <h2>
        <Link to={link}>
          {name}
        </Link>
      </h2>
      <div className="vacancies-price">
        {`Р ${priceFrom}`}
        {priceTo && ` - ${priceTo}`}
      </div>
      <div>
        {exp && `Стаж: ` + exp}
      </div>
      <div>
        {exp && `Образование: ` + exp}
      </div>
    </div>
  )
}

export default CardsInfo
