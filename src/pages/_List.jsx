import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getListing } from 'store/asyncActions/getListing';

import ListItem from 'components/template/ListItem';

const List = () => {

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {

    getListing(params.catagoryName).then(res => {

      setListings(res);
      setLoading(false);

    });
  }, []);

  return (
    <div className="content">

      <div className="main-grid">
        <div className="col-12">
          <h1>Каталог {params.catagoryName === 'rent' ? 'Работодатели' : 'Вакансии'}</h1>
        </div>
        <div className="col-12">
          {loading ? 'loading' : listings && listings.length > 0 ? (
            <>
              <ul className='ln'>
                {listings.map((listing) => (
                  <ListItem
                    listing={listing.data}
                    id={listing.id}
                    key={listing.id}
                    imgCompany={listing.imgCompany}
                    link={`/catalog/${params.catagoryName}/${listing.id}`}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>Нет элементов {params.catagoryName}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default List