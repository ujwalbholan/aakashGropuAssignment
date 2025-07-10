const Services = () => {
  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {["Web Development", "UI/UX Design", "Digital Marketing"].map(
          (service, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-lg shadow hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{service}</h3>
              <p className="text-sm text-gray-600 mt-2">
                We craft scalable and engaging digital solutions tailored to
                your business goals.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default Services;
