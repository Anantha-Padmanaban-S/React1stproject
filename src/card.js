import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


function Card(packs) {
    return (

        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{packs.items.subs}</h5>
                    <h6 className="card-price text-center">${packs.items.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        {packs.items.benefits.map((types) => {
                           
                            return types.enabled ?  <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{types.type}</li> : <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faXmark} /></span>{types.type}</li>
                        })}

                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Try it now</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;





