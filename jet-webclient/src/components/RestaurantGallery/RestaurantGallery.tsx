import React, { useEffect, useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import './RestaurantGallery.css';
import { FetchOptions, fetchData } from '../../utils/services';
import PaginationComponent from '../GenericComponents/Pagination';
import { BACKEND_BASE_URL } from '../../utils/config';
import { removeSpaces } from '../../utils/utils';
import CustomCard from '../GenericComponents/Card';

/* component takes search text and displays the search results */
interface RestaurantGalleryInterface {
  searchText: string;
}

const PAGE_LIMIT = 12;
const RestaurantGallery: React.FC<RestaurantGalleryInterface> = ({ searchText }) => {
  /* initial restaurants are empty and fetched within useEffect */
  const [restaurants, setRestaurants] = useState([]);
  const [pageNumber, updatePageNumber] = useState(1);
  const [totalPages, updateTotalPages] = useState(0);

  // this will search the post code in the restaurant
  async function filterRestaurants(pageNo: number): Promise<void> {
    const postalCode: string = removeSpaces(searchText);
    const apiUrl = `${BACKEND_BASE_URL}/restaurant/${postalCode}?page=${pageNo}&pageLimit=${PAGE_LIMIT}`;
    try {
      const options: FetchOptions = {
        method: 'GET',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetchData<any>(options);
      if (response.statusCode === 200) {
        const restaurants = response.data;
        setRestaurants(restaurants.restaurants);
        // calculating the total number of possible pages
        const total = restaurants.metaData.resultCount / PAGE_LIMIT;

        updateTotalPages(Math.ceil(total));
      } else {
        console.error('Failed to fetch data. Status code:', response.statusCode);
      }
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  }
  // if search text has changed from parent component the search results will be updated here
  useEffect(() => {
    if (searchText && searchText.length) {
      filterRestaurants(1);
    } else {
      setRestaurants([]);
      updateTotalPages(0);
      updatePageNumber(1);
    }
  }, [searchText]);
  // on change of page number the result is updated
  useEffect(() => {
    if (searchText && searchText.length) {
      filterRestaurants(pageNumber);
    } else {
      setRestaurants([]);
      updateTotalPages(0);
      updatePageNumber(1);
    }
  }, [pageNumber]);
  return (
    <div>
      {restaurants && restaurants.length ? (
        <div className="search-result-label-container">
          <div className="search-result-label">
            <p>
              Results for postal code : <b> {searchText}</b>.
            </p>
          </div>
        </div>
      ) : null}
      <div className="restaurant-gallery-container">
        <div className="restaurant-gallery-subcontainer">
          {restaurants && restaurants.length ? (
            restaurants.map((item, index) => <CustomCard restaurant={item} />)
          ) : searchText && searchText.length ? (
            <div className="restaurant-unavailable-container">
              <Card>
                <CardBody>
                  <p>We could not find any restaurant in {searchText}.</p>
                </CardBody>
              </Card>
            </div>
          ) : null}
        </div>
        <div className="pagination-container">
          {totalPages > 1 ? (
            <PaginationComponent
              total={totalPages}
              currentPage={pageNumber}
              updatePageNumber={(pageNumber) => updatePageNumber(pageNumber)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RestaurantGallery;
