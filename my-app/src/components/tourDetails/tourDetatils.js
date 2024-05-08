import {  useParams } from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const data=require('../../data/db.json')
function TourDetails() {
  const { id } = useParams(); 
  const [showMore, setShowMore] = useState(false);


  
  const getTourDetails = (id) => {


    return data.filter((tour) => tour.id === id)[0];
  };

  const tourDetails = getTourDetails(id); 
  console.log(tourDetails);
  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  const cardStyle = {
    height: showMore ? 'auto' : '360px',
    overflow: showMore ? 'auto' : 'hidden' 
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card" style={cardStyle}>
            <img src={tourDetails.image} className="card-img-top" alt={tourDetails.name} />
            <div className="card-body">
           
              <h5 className="card-title">{tourDetails.name}</h5>
              {!showMore && <button onClick={toggleDescription} className="btn btn-link">See More</button>}
              {showMore && <button onClick={toggleDescription} className="btn btn-link">See Less</button>}
              <div className="card-text-scroll">
                <p className="card-text">{tourDetails.info}</p>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;