import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>

      <div className="title">
        <h1>About Us</h1>
        <p>Who are we</p>
      </div>

      <div className="section">
        <div className="box box1">
          <h2>Our Work</h2>
          <p>
            Our work is dedicated to tackling food wastage and supporting NGOs 
            and shelter homes in their efforts to alleviate hunger and malnutrition.
          </p>
        </div>
        <div className="box box2">
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect surplus food from various sources with the
            organizations and communities that need it the most. By doing so, we
            aim to minimize food wastage and make a positive impact on the lives
            of those facing food insecurity.
          </p>
        </div>
        <div className="box box3">
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a world where no one goes hungry, and where
            excess food is efficiently distributed to those in need. We believe
            that by leveraging technology and collaborative efforts, we can make a
            significant difference in reducing food waste and ensuring that
            everyone has access to nutritious meals.
          </p>
        </div>
      </div>

      <div className="team">

        <h2>The Team Behind This Mission</h2>

        <div className="teamContainer">

          {/* Team member card 1 */}
          <div className="teamMember">

            <div className="avatar"></div>
            <h3>Rohit Kumar</h3>
            <p>Role and work description</p>

          </div>

          {/* Team member card 2 */}
          <div className="teamMember">

            <div className="avatar"></div>
            <h3>Shashank Raj</h3>
            <p>Role and work description</p>

          </div>

          {/* Team member card 3
          <div className="teamMember">

            <div className="avatar"></div>
            <h3>Daanish Islam</h3>
            <p>Role and work description</p>

          </div> */}

          {/* Team member card 4
          <div className="teamMember">

            <div className="avatar"></div>
            <h3>Ankit Kumar</h3>
            <p>Role and work description</p>

          </div> */}

        </div>
      </div>

      <div className="contacts-link-about">

        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to contact us.</p>

        <Link to="/contact">

          <div className="contactButtonContainer">
            <button className="contactButton">Contact Us</button>
          </div>

        </Link>
      </div>
    </div>
  );
};

export default About;