import Breadcrumbs from "../components/Breadcrumbs";
const AboutUs = () => {
  return (
    <div className="mb-12 text-gray-800 bg-gray-50 font-Fira">
      <Breadcrumbs />
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center bg-center bg-cover h-80"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/featured/?fashion,style")',
        }}
      >
        <div className="p-8 text-center text-white bg-gradient-to-r from-blue-800 to-blue-950 rounded-xl">
          <h1 className="mb-4 text-4xl font-bold">About Us</h1>
          <p className="text-lg">
            Your trusted destination for timeless fashion and modern elegance.
          </p>
        </div>
      </div>

      {/* About Us Content */}
      <section className="px-6 py-16 mx-auto max-w-7xl sm:px-10">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Who We Are
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          At <span className="font-bold">Fashions Hub</span>, we believe that
          fashion is more than just clothing; it’s an expression of
          individuality, creativity, and confidence. Since our inception, our
          mission has been to provide our customers with innovative designs and
          premium-quality pieces that inspire and empower.
        </p>
        <p className="mb-12 text-lg leading-relaxed text-gray-700">
          With a commitment to sustainability and inclusivity, we source
          responsibly, design thoughtfully, and create timeless collections for
          every style and occasion. From the runway to your wardrobe, we bring
          the best of global trends to you.
        </p>

        <h2 className="mt-32 mb-8 text-3xl font-bold text-center text-gray-900">
          Our Vision
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          To redefine the fashion industry by blending modern aesthetics with
          sustainable practices, fostering a community of empowered individuals
          who love to express themselves through our creations.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="px-6 mx-auto mt-32 max-w-7xl sm:px-10">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Example Team Member */}
            <div className="text-center">
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Alex Johnson
              </h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://img.freepik.com/premium-photo/woman-suit-with-black-purse-black-purse_862335-20698.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Sophia Lee
              </h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 mx-2 text-white bg-gray-900 rounded-3xl">
        <div className="px-6 mx-auto text-center max-w-7xl sm:px-10">
          <h2 className="mb-4 text-3xl font-bold">Join Our Journey</h2>
          <p className="mb-6 text-lg">
            Discover the perfect blend of style and substance. Stay inspired and
            let us be part of your story.
          </p>
          <a
            href="/collection"
            className="inline-block px-6 py-3 font-semibold text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-100"
          >
            Explore Our Collection
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
