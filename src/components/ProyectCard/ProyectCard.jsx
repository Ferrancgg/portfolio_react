import "./ProyectCard.css";

const ProyectCard = () => {
  return (
    <div className="proyect-card">
      <div className="background-border">
        <div className="container-information">
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/di49fnkc8/image/upload/v1679929496/web%20fotos/foto_bn19_gfuaqp.jpg"
              alt=""
            />
          </div>

          <div className="text-container">
            <h2>nombre</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              ipsa nulla. Voluptatum corrupti, praesentium nostrum quos sint
              omnis. Voluptatum voluptates ipsa debitis nihil nobis dolor
              distinctio voluptas tenetur ex autem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
