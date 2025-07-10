import React from "react";

const teamMembers = [
  {
    name: "Sujan Shrestha",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Passionate about clean code and scalable architecture.",
  },
  {
    name: "Aayusha Bista",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Loves turning ideas into intuitive, pixel-perfect designs.",
  },
  {
    name: "Anil Maharjan",
    role: "SEO Expert",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Driven by data, results, and building organic growth.",
  },
  {
    name: "Pratiksha Thapa",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Keeps everything on track, on time, and client-focused.",
  },
];

const Teams = () => {
  return (
    <section id="team" className="bg-gray-50 pt-24 pb-20 px-6">
      {/* Section 1: Introduction */}
      <div
        className="relative w-full h-screen flex flex-col justify-center items-center px-6 mb-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://picsum.photos/id/1011/1920/1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text content */}
        <div className="relative z-10 text-white text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Behind Every Great Project is a Great Team
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            Our strength lies in our people. Diverse in background, united in
            purpose—our team brings vision, energy, and dedication to every
            project we build.
          </p>
        </div>
      </div>

      {/* Section 2: Company Values */}
      <div className="max-w-5xl mx-auto mb-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Collaboration
          </h3>
          <p className="text-gray-600 text-sm">
            We believe that the best outcomes come from working together—openly
            and creatively.
          </p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Innovation
          </h3>
          <p className="text-gray-600 text-sm">
            We challenge the status quo with new ideas, technologies, and better
            ways to serve users.
          </p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Integrity
          </h3>
          <p className="text-gray-600 text-sm">
            We hold ourselves to the highest standards—because trust is the
            foundation of all we do.
          </p>
        </div>
      </div>

      {/* Section 3: Team Members */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
