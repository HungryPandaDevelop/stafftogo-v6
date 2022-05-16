import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDelete } from 'store/asyncActions/getListing';


import ListItem from 'components/template/ListItem';

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
    console.log('loading', listings)
    return (
      <>
        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <ListItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => deleteItem(listings, listing.id)}
                  onEdit={() => onEdit(listing.id)}
                  name={listing.vacancies_name}
                  solary={[listing.salary_priceFrom, listing.salary_priceTo]}
                  nameCompany={props.getInfoAccount && props.getInfoAccount.name_company}
                  imgCompany={props.getInfoAccount && props.getInfoAccount.imgCompany}
                  phoneCompany={props.getInfoAccount && props.getInfoAccount.phones_main}
                  mailCompany={props.getInfoAccount && props.getInfoAccount.email}
                  link={`/catalog/vacancies/${listing.id}`}
                />
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