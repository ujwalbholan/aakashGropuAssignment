import { FaCode, FaBullhorn, FaPaintBrush, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-20">
      {/* Section 1: Who We Are */}
      <div className="bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            AakashLabs is a team of passionate innovators, developers,
            designers, and marketers committed to building exceptional digital
            experiences. Our mission is to help businesses transform and thrive
            in the digital landscape through powerful and purposeful technology.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in blending creativity with technical excellence to craft
            solutions that drive real impact. Whether you’re a startup or an
            established enterprise, we’re here to bring your vision to life.
          </p>
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card */}
            {[
              {
                icon: (
                  <FaCode className="text-blue-600 text-3xl mb-4 mx-auto" />
                ),
                title: "Web Development",
                desc: "Fast, responsive, and scalable websites & web apps with the latest technologies.",
              },
              {
                icon: (
                  <FaPaintBrush className="text-blue-600 text-3xl mb-4 mx-auto" />
                ),
                title: "UI/UX & Branding",
                desc: "Beautiful and user-friendly designs that strengthen your brand’s identity.",
              },
              {
                icon: (
                  <FaBullhorn className="text-blue-600 text-3xl mb-4 mx-auto" />
                ),
                title: "Digital Marketing",
                desc: "Data-driven marketing strategies to boost your reach and conversion.",
              },
              {
                icon: (
                  <FaChartLine className="text-blue-600 text-3xl mb-4 mx-auto" />
                ),
                title: "SEO & Analytics",
                desc: "Improve your visibility and track success with in-depth performance analytics.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40"
              >
                {service.icon}
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
