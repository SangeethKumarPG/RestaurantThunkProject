import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function RestaurantCard({restaurant}) {
  return (
    <>
      <Link to={`/restaurant_view/${restaurant?.id}`} style={{textDecoration:"none"}}>
        <Card  className="p-1 shadow" style={{height:"20rem"}}>
          <Card.Img
            variant="top"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWGa7nz-J8ZfjAVxPSsPdXwLJw1ajyWAEmQ&s"
            src={restaurant.photograph}
            style={{height:"15rem"}}
          />
          <Card.Body>
            <Card.Title className="text-center text-warning">
              {restaurant.name}
            </Card.Title>
            <Card.Text>
              <p className="d-flex">Neighbourhood:<span>{restaurant.neighborhood}</span></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default RestaurantCard;
