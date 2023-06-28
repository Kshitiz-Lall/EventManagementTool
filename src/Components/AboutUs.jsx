import React from "react";

const AboutUs = () => {
  const generateCreators = () => {
    const creators = [];
    for (let i = 1; i <= 10; i++) {
      const creator = {
        id: i,
        name: `Creator ${i}`,
        image: `https://dummyimage.com/200x200/000000/ffffff&text=Creator+${i}`,
      };
      creators.push(creator);
    }
    return creators;
  };

  const creators = generateCreators();

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Creators</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="rounded-full h-24 w-24 mx-auto mb-4"
              />
              <p className="text-lg font-medium">{creator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
