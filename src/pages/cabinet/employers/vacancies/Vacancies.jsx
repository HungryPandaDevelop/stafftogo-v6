import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDelete } from 'store/asyncActions/getListing';

import CardItemVacancies from 'components/template/cards/CardItemVacancies';

import TemplateAccount from 'components/template/TemplateAccount';


const Vacancies = (props) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    getListing('vacancies', 'user').then(res => {

      setListings(res);
      setLoading(false);

    });
  }, []);

  const deleteItem = (listings, id) => {
    onDelete(listings, id, 'vacancies').then(res => {
      setListings(res);
    });

  }


  const onEdit = async (listingId) => {
    navigate(`/cabinet/vacancies-edit/${listingId}`)
  }

  const contentPage = () => {
    return (
      <>
        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <CardItemVacancies
                    listing={listing.data}
                    id={listing.id}
                    onEdit={() => onEdit(listing.id)}
                    onDelete={() => deleteItem(listings, listing.id)}
                  />
                </div>
              ))
            }
          </>
        )}
      </>
    )
  }
  const rightSibar = () => {
    return (
      <Link className="btn btn--orange" to="/cabinet/vacancies-new">
        Создать вакансию
      </Link>
    )
  }

  return (
    <>
      <TemplateAccount title="Мои вакансии" rightSibar={rightSibar()}>
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



export default Vacancies;