import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getLiked, onDelete } from 'store/asyncActions/getLiked';

import CardItemResume from 'components/template/cards/CardItemResume';

import TemplateAccount from 'components/template/TemplateAccount';


const Liked = (props) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    getLiked('resume').then(res => {

      setListings(res);
      setLoading(false);

    });
  }, []);



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

                  />
                </div>
              ))
            }
          </>
        )}
      </>
    )
  }


  return (
    <>
      <TemplateAccount title="Мне понравилось" >
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



export default Liked;