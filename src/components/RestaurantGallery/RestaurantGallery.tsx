import React, { useEffect, useState } from "react";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import './RestaurantGallery.css'
import {FetchOptions, fetchData} from '../../utils/services'
import { StarRating } from "../GenericComponents/Start";
import PaginationComponent from "../GenericComponents/Pagination";

interface RestaurantGalleryInterface {
    searchText:string;
}

function removeSpaces(str:string) {
    return str.replace(/\s/g, ''); // Using regular expression to remove all white spaces
  }
let PAGE_LIMIT = 10;
const RestaurantGallery :React.FC<RestaurantGalleryInterface>= ({searchText}) =>{
    const [restaurants,setRestaurants] = useState([])
    const [pageNumber,updatePageNumber] = useState(1);
    const [totalPages,updateTotalPages] = useState(0)

      // Example usage of fetchData function
      async function filterRestaurants(pageNo:number): Promise<void> {
        let postalCode= removeSpaces(searchText);
        const apiUrl = `http://localhost:3030/${postalCode}?page=${pageNo}&pageLimit=${PAGE_LIMIT}`;
      
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
            console.log('restaurants:', restaurants);
            setRestaurants(restaurants.restaurants)
            let total= restaurants.metaData.resultCount/PAGE_LIMIT;
           
            updateTotalPages(Math.ceil(total))
          } else {
            console.error('Failed to fetch user data. Status code:', response.statusCode);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      
    useEffect(()=>{
        filterRestaurants(1)
    },[searchText])
    useEffect(()=>{
        filterRestaurants(pageNumber)
    },[pageNumber])
  
      return (
        <div className="restaurant-gallery-container">
            <div className="restaurant-gallery-subcontainer">
                {restaurants&&restaurants.map((item, index) => (
                <Card className="card" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                       <CardHeader >
                        <b>{item.name}</b>
                    </CardHeader>
                    <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.logoUrl}
                        />
                        <p>Rating : {item.rating.starRating} </p>
                        <ul>
                            
                            {item.cuisines.map(cu=>{
                            return (
                                <p>{cu.name}</p>
                            )
                        })}</ul>
                        <p>{item.address.city+" "+item.address.firstLine}</p>
                      
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </Card>
            ))}

         


            </div>
            <div
                className="pagination-container"
              >
                 {
                  totalPages>1? <PaginationComponent total={totalPages}
                  currentPage={pageNumber}
                  updatePageNumber={(pageNumber)=>updatePageNumber(pageNumber)}
              />:null
                 }
              </div>
        </div>
      );
}

export default RestaurantGallery;

