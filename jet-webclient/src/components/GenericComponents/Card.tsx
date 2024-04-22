import { FaStar } from "react-icons/fa6";
import {Button, Card, CardBody, CardFooter, CardHeader, Image, Tooltip} from "@nextui-org/react";
import './GenericComponent.css'
import { CiLocationOn } from "react-icons/ci";


interface CardInterface {
    restaurant:any
}

const CustomCard: React.FC<CardInterface> = ({restaurant})=>{
    return (
        <Card className="card" shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardHeader >
                <b>{restaurant.name}</b>
            </CardHeader>
            <CardBody className="overflow-visible p-0">
            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={restaurant.title}
                className="w-full object-cover h-[140px]"
                src={restaurant.logoUrl}
                />
                <div className="rating_">
                    <p>Rating : {restaurant.rating.starRating}  </p>
                    <FaStar color="#ff8000" className="rating-icon" />
                </div>
                <div className="cuisine-container">
                    {restaurant.cuisines.map(cu=>{
                    return (
                        <div style={{marginLeft:"3px",marginTop:"3px"}}>
                            <Tooltip content="Cuisine">
                                <Button style={{backgroundColor:"#ff8000"}}>{cu.name}</Button>
                            </Tooltip>
                        </div>
                    )
                })}</div>
                <div className="rating_">
                    <p>{restaurant.address.city+" "+restaurant.address.firstLine}</p>
                    <CiLocationOn color="" className="rating-icon" />
                </div>
                
            </CardBody>
            <CardFooter className="text-small justify-between">
                <p className="text-default-500">{restaurant.price}</p>
            </CardFooter>
        </Card>
    )
}

export default CustomCard;