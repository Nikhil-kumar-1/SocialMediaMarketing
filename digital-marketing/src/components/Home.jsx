import { useState, useEffect } from 'react';
import Header from './Header';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Higher ranking & traffic with our powerful tactics",
      description: "Creating SEO-optimized website content involves several key strategies and best practices to ensure your website wins and attracts the right audience.",
      image: "https://img.freepik.com/free-photo/young-woman-working-laptop-isolated-white-background_231208-1838.jpg?ga=GA1.1.2042548242.1742870541&semt=ais_hybrid",
      stats: [
        { number: "5k+", text: "SEO Visitors" },
        { number: "200+", text: "Projects Done" }
      ]
    },
    {
      title: "Boost your online presence with expert SEO",
      description: "Transform your digital footprint with our data-driven SEO strategies that deliver measurable results and sustainable growth.",
      image: "https://img.freepik.com/free-photo/front-view-young-female-white-shirt-holding-grey-files-light-pink-wall-model-woman-pose_140725-33254.jpg?ga=GA1.1.2042548242.1742870541&semt=ais_hybrid",
      stats: [
        { number: "10k+", text: "Monthly Traffic" },
        { number: "150+", text: "Happy Clients" }
      ]
    },
    {
      title: "Digital success through strategic optimization",
      description: "Leverage our proven SEO techniques to dominate search rankings and connect with your target audience effectively.",
      image: "https://img.freepik.com/free-photo/front-view-young-lady-giving-empty-hand-with-her-document_140725-37591.jpg?ga=GA1.1.2042548242.1742870541&semt=ais_hybrid",
      stats: [
        { number: "95%", text: "Success Rate" },
        { number: "300+", text: "Keywords Ranked" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="relative min-h-screen bg-white overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="pt-10">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">{slide.title.split(' ').slice(0, 2).join(' ')}</span>
                    <span className="block text-red-600">
                      {slide.title.split(' ').slice(2).join(' ')}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    {slide.description}
                  </p>
                  <div className="mt-8">
                    <button className="bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition-colors">
                      Get Started
                    </button>
                  </div>
                  <div className="mt-8 flex space-x-12">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex}>
                        <p className="text-2xl font-bold text-red-500">{stat.number}</p>
                        <p className="text-gray-600">{stat.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-64 sm:h-72 md:h-96 lg:h-full mt-[50px]">
                  <img
                    src={slide.image}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ABOUT SECTION */}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-red-100 rounded-lg transform -rotate-6"></div>
          <img
            src="https://img.freepik.com/free-photo/hispanic-male-executive-gesturing-copy-space-while-making-eye-contact-studio_662251-786.jpg?ga=GA1.1.2042548242.1742870541&semt=ais_hybrid"
            alt="Professional"
            className="relative z-10 w-full h-auto rounded-lg shadow-xl"
          />
          <div className="absolute top-4 -right-4 bg-white rounded-lg p-4 shadow-lg z-20">
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-2xl">15+</span>
              <span className="text-sm text-gray-600">Years Of Experience</span>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:pl-12">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">
              Crafting seamless experience elevate your{' '}
              <span className="text-red-500">digital products</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Learn how our business-first principles combines creativity and functionality to deliver
              outstanding user experiences for your audience. Learn how our business-first principles combines creativity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Proven Results', icon: '📈' },
              { title: 'Customized Strategy', icon: '🎯' },
              { title: 'Transparent Reporting', icon: '📊' },
              { title: 'Dedicated Support', icon: '🛠️' },
              { title: 'Expert Team', icon: '👥' },
              { title: 'Continuous Improvement', icon: '🔄' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-gray-700 font-medium">{feature.title}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;