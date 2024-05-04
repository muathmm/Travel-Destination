import 'bootstrap/dist/css/bootstrap.min.css';
import './tours.css'; 

const data = require("../../data/db.json");

function Tours() {
    return (
        <div className="container">
            <div className="row">
                {data.map((element, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 d-flex flex-column">
                            <img src={element.image} className="card-img-top img-fluid" alt={element.name} />
                            <div className="card-body flex-grow-1">
                                <h5 className="card-title">{element.name}</h5>
                                <div className="card-text-scroll">
                                    <p className="card-text">{element.info}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tours;