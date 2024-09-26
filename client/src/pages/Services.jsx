import {useAuth} from "../store/auth.jsx";
const Services = () => {
    const {service} = useAuth();

    return(
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {
                   service.map ((currentElement,index) => {
                       const {provider,price,service,description} = currentElement;
                       return (
                           <div className="card" key={index}>
                               <div className="card-image">
                                   <img src="/images/design.png" alt="A girl drawing image"/>
                               </div>
                               <div className="card-details">
                                   <div className="grid grid-two-cols">
                                       <p>{provider}</p>
                                       <p>{price}</p>
                                   </div>
                                   <h2>{service}</h2>
                                   <p>{description}</p>
                               </div>
                           </div>
                       )
                   })
                }
            </div>
        </section>
    )
}
export default Services;