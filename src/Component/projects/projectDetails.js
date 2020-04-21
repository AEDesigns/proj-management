import React from "react";

const projectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            repudiandae dolores nesciunt quod quae unde in inventore, magnam
            labore voluptatem sit quo corporis laboriosam atque accusantium
            officia facilis quaerat. Quibusdam.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By: Author</div>
          <div>Date: Date</div>
        </div>
      </div>
    </div>
  );
};

export default projectDetails;
