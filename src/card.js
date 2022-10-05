function Card() {
    return (
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                   
                   
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                <hr/>
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                                            Private Projects</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                                            Phone Support</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
                                        </li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Try it now</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                                <hr/>
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Try it now</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                                <hr/>
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                            Subdomains</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Try it now</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;





// <div classNameName="col-lg-4">
//             <div classNameName="card mb-5 mb-lg-0">
//                 <div classNameName="card-body">
//                     <h5 classNameName="card-title text-muted text-uppercase text-center">{packs.items.subs}</h5>
//                     <h6 classNameName="card-price text-center">${packs.items.price}<span classNameName="period">/month</span></h6>
//                     <hr></hr>
//                     <ul classNameName="fa-ul">
//                         {
//                             packs.items.benefits.map((types) => {
//                                 return <li><span classNameName="fa-li"><i classNameName="fas fa-check"></i></span>{types.type}</li>
//                             })
//                         }
//                         {/* <li><span classNameName="fa-li"><i classNameName="fas fa-check"></i></span>Single User</li> */}
//                         {/* <li><span classNameName="fa-li"><i classNameName="fas fa-check"></i></span>5GB Storage</li>
//                                     <li><span classNameName="fa-li"><i classNameName="fas fa-check"></i></span>Unlimited Public Projects</li>
//                                     <li><span classNameName="fa-li"><i classNameName="fas fa-check"></i></span>Community Access</li> */}
//                         {/* <li classNameName="text-muted"><span classNameName="fa-li"><i classNameName="fas fa-times"></i></span>Unlimited
//                                         Private Projects</li>
//                                     <li classNameName="text-muted"><span classNameName="fa-li"><i classNameName="fas fa-times"></i></span>Dedicated
//                                         Phone Support</li>
//                                     <li classNameName="text-muted"><span classNameName="fa-li"><i classNameName="fas fa-times"></i></span>Free Subdomain
//                                     </li>
//                                     <li classNameName="text-muted"><span classNameName="fa-li"><i classNameName="fas fa-times"></i></span>Monthly Status
//                                         Reports</li> */}
//                     </ul>
//                     <div classNameName="d-grid">
//                         <a href="#" classNameName="btn btn-primary text-uppercase">Get it</a>
//                     </div>
//                 </div>
//             </div>
//         </div>