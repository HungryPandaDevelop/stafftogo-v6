import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDelete } from 'store/asyncActions/getListing';

import CardItemResume from 'components/template/cards/CardItemResume';

import TemplateAccount from 'components/template/TemplateAccount';


const Vacancies = (props) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    getListing('resume', 'user').then(res => {

      setListings(res);
      setLoading(false);
      console.log('res', res)
    });
  }, []);

  const deleteItem = (listings, id) => {
    onDelete(listings, id, 'resume').then(res => {
      setListings(res);
    });

  }


  const onEdit = async (listingId) => {
    navigate(`/cabinet/resume-edit/${listingId}`)
  }

  const contentPage = () => {
    return (
      <>
        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <CardItemResume
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
      <Link className="btn btn--orange" to="/cabinet/resume-new">
        Создать резюме
      </Link>
    )
  }

  return (
    <>
      <TemplateAccount title="Мои резюме" rightSibar={rightSibar()}>
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



export default Vacancies;