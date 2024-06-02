// const Testimony = (photo, name, testimony) => {
//     return(
//         <section className="tesimony">
//             <div className="testimony-image">
//                 {photo}
//             </div>
//             <h2>{name}</h2>
//             <p>{testimony}</p>
//         </section>
//     )
// }
const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testify-header">
        <h2>Testimonials</h2>
        <p>Read what other people have to say about us...</p>
      </div>
      <div className="testify-section">
        <div className="testimonial-holder">
          <div className="testimony-img">
            <img
              src={"src/assets/susan.jpg"}
              alt=""
              className="testimony-img"
            />
          </div>
          <h1>Susan Njeri</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nihil iste? Sit provident vel molestiae temporibus
            dolorem, labore assumenda reiciendis ea odio omnis, doloremque nisi
            esse voluptatibus iure repellat excepturi!
          </p>
        </div>
        <div className="testimonial-holder">
          <div className="testimony-img">
            <img src={"src/assets/john.jpg"} alt="" className="testimony-img" />
          </div>
          <h1>John Ochieng</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nihil iste? Sit provident vel molestiae temporibus
            dolorem, labore assumenda reiciendis ea odio omnis, doloremque nisi
            esse voluptatibus iure repellat excepturi!
          </p>
        </div>
        <div className="testimonial-holder">
          <div className="testimony-img">
            <img
              src={"src/assets/steve.jpg"}
              alt=""
              className="testimony-img"
            />
          </div>
          <h1>Steve Kariuki</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nihil iste? Sit provident vel molestiae temporibus
            dolorem, labore assumenda reiciendis ea odio omnis, doloremque nisi
            esse voluptatibus iure repellat excepturi!
          </p>
        </div>
        <div className="testimonial-holder">
          <div className="testimony-img">
            <img
              src={"src/assets/rebecca.jpg"}
              alt=""
              className="testimony-img"
            />
          </div>
          <h1>Rebecca Wanja</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nihil iste? Sit provident vel molestiae temporibus
            dolorem, labore assumenda reiciendis ea odio omnis, doloremque nisi
            esse voluptatibus iure repellat excepturi!
          </p>
        </div>
        <div className="testimonial-holder">
          <div className="testimony-img">
            <img
              src={"src/assets/andrew.jpg"}
              alt=""
              className="testimony-img"
            />
          </div>
          <h1>Andrew Kambi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nihil iste? Sit provident vel molestiae temporibus
            dolorem, labore assumenda reiciendis ea odio omnis, doloremque nisi
            esse voluptatibus iure repellat excepturi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
