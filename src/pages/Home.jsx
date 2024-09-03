import React, { useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../redux/restaurantSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);
  // the name we are using inside the use selector is the 'key' name of the slice in store(inside the reducers)
  // this will give all the objects in the state. we can access the objects we need.
  const allRestaurants = useSelector(
    (state) => state.restaurantSlice.allRestaurants.restaurants
  );
  // console.log(allRestaurants);

  return (
    <>
      <Row className="mt-2">
        {allRestaurants?.length > 0 ? (
          allRestaurants.map((restaurant) => (
            <Col sm={6} md={4} lg={4} xl={2} className="p-1 m-1">
              <RestaurantCard restaurant={restaurant}/>
            </Col>
          ))
        ) : (
          <p>No item found</p>
        )}
      </Row>
    </>
  );
}

export default Home;
