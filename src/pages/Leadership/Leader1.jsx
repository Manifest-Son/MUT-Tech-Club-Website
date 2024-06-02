const Leaders = ( ) => {
    return(
        <>
         <div className="leaders-section">
                <div className="leaders-container">
                    <img src={image} alt={`An image of v ${name}`} className ="leaders-img"/>
                <div className="socials">
                    <BsTwitterX />
                    <FaFacebook />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </div>
            <div className="leader-details">
            <h3> {name} </h3>
            <p className="leader-position">{position}</p>
            <p className="leader-description">{description}</p>
            </div>
        </>
    )
}