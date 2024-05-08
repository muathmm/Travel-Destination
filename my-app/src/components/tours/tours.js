import 'bootstrap/dist/css/bootstrap.min.css'
import './tours.css'; 
import  Tour from "../tour/tour"


const data = require("../../data/db.json");

function Tours() {
    return (
        <div className="container">
                    

            <div className="row">
                {data.map((element, index) => (
                        
                        <Tour key={element.id} tour={element} />
                    
                ))}
            </div>
        </div>
    );
}

export default Tours;