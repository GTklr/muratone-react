import './Contact.css'

const Contact = () => {
    return (  
        <div className="bg-secondary" style={{height: '100vh'}}>
            <div className="container ContactSection w-50">
                <h1 className=""> Contact </h1>
                <p> Contact Muratone for more info on bookings, media enquiries and sponsorships with the form below.
                    Alternatively, hit that WhatsApp button</p>
                
                <div className="px-5">
                    <a className="btn btn-success btn-lg" href="https://wa.link/vnkosv" target="_blank"  role="button">Whatsapp</a>
                </div>

                <h2 className="pt-5"> Email </h2>
                
                    <form className="d-flex flex-column" action="https://getform.io/f/d9023263-7139-4eaf-b748-7244ea477ccc"  method="post" target="_blank">
                        <label>
                            <input type="text" placeholder="Name" name="name" className="text-center"/>
                        </label>
                        <label>
                            <input type="email" placeholder="Email" name="email" className="text-center"/>
                        </label>
                        <label>
                            <textarea type="textarea" placeholder="Message" name="message" className="text-center"/>
                        </label>
                        <button className="btn purplebtn btn-success" type="submit">submit</button>
                    </form>
                
            </div>
        </div> 
);
}
 
export default Contact