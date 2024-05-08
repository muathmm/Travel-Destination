import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './tour.css'; 




function Tour(props){
    let tour= props.tour;
    return  <div key={props.tour.id} className="col-md-4 mb-4">
    <Link to={`/city/${props.tour.id}`} className="text-decoration-none">
      <div className="card h-100 d-flex flex-column">
        <img src={props.tour.image} className="card-img-top img-fluid" alt={props.tour.name} />
        <div className="card-body flex-grow-1">
          <h5 className="card-title mb-0">{props.tour.name}</h5>
      
        </div>
      </div>
    </Link>
  </div>
                
    
}
export default Tour;