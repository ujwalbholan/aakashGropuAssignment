const FeaturedWork = () => {
  return (
    <section className="py-16 bg-gray-100 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all ease-in duration-300 overflow-hidden"
            >
              <img
                src={`https://picsum.photos/id/${item * 10}/400/250`}
                alt={`Project ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-700 font-semibold mb-1">
                  Project {item}
                </h3>
                <p className="text-sm text-gray-600">
                  A modern solution built for real-world needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
