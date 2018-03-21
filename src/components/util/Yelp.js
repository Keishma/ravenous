const apiKey = 'bbNfnWWtp7xB7kvvDX-c1-NVsH1ok-IO4yQ7MgohCuojx75ZUQuKjR_tkDGRA6zlYe-A8KfjDofbEpk-z_uEsqf5AVQq0-nHQ672kFy4z0ghwF74ydxbrEBarSCwWnYx';

const Yelp = {
search(term, location, sortBy) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
  }
    }).then(response => {
    return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => ({
          id : business.id,
          imageSrc : business.image_url,
          name: business.name,
          address: business.address1,
          city: business.city,
          state: business.state,
          zipCode: business.zip_code,
          category: business.categories.title,
          rating:  business.rating,
          reviewCount: business.review_count,
          }));
        }
      });
  }
};

export default Yelp;
