import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Gaurav Ahirrao",
      position: "Pursuing Post Graduate Diploma in Advanced Computing from CDAC Mumbai",
      image: "/assets/Gaurav_Ahirrao_JH.jpg"
    },
    {
      id: 2,
      name: "Bhagyashri Date",
      position: "Pursuing Post Graduate Diploma in Advanced Computing from CDAC Mumbai",
      image: "/assets/bhagyashri.jpg"
    },
    {
      id: 3,
      name: "Ashish Singh",
      position: "Pursuing Post Graduate Diploma in Advanced Computing from CDAC Mumbai",
      image: "/assets/AS.jpg"
    }
  ];

  return (
    <section className="team">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>The passionate professionals behind your perfect wedding</p>
        </div>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <div className="social-links">
                  <a href="https://www.facebook.com"><FaFacebookF /></a>
                  <a href="https://x.com/?lang=en-in"><FaTwitter /></a>
                  <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;