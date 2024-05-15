import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { Button, Card, CardBody,  CardHeader, Image, Tooltip } from '@nextui-org/react';
import './GenericComponent.css';
import { CiLocationOn } from 'react-icons/ci';

/*
* Displaying a restaurant 
*/ 

interface CuisineInterface {
  name:string
}
interface RestaurantInterface {
  name:string,
  logoUrl:string,
  rating:{starRating:string},
  cuisines:CuisineInterface[],
  address:{
    city:string,
    firstLine:string
  },
}
interface CardInterface {
  restaurant: RestaurantInterface
}

const CustomCard: React.FC<CardInterface> = ({ restaurant }) => {
  return (
    <Card className="card" shadow="sm" isPressable onPress={() => console.log('item pressed')}>
      <CardHeader>
        <b>{restaurant.name}</b>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-[140px]"
          src={restaurant.logoUrl}
        />
        <div className="rating_">
          <p>Rating : {restaurant.rating.starRating} </p>
          <FaStar color="#ff8000" className="rating-icon" />
        </div>
        <div className="cuisine-container">
          {restaurant.cuisines.map((cusine:CuisineInterface,index) => {
            return (
              <div key={index} style={{ marginLeft: '3px', marginTop: '3px' }}>
                <Tooltip content="Cuisine">
                  <Button style={{ backgroundColor: '#ff8000' }}>{cusine.name}</Button>
                </Tooltip>
              </div>
            );
          })}
        </div>
        <div className="rating_">
          <p>{restaurant.address.city + ' ' + restaurant.address.firstLine}</p>
          <CiLocationOn color="" className="rating-icon" />
        </div>
      </CardBody>
    </Card>
  );
};

export default CustomCard;
