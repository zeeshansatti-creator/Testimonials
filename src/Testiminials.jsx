import { useEffect } from "react";
import { useState } from "react";

const Testiminials = () => {
    const [position, setPosition] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Working with Thirty Six Studios was an incredible experience. Their attention to detail and innovative solutions exceeded our expectations."
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "The team's creativity and technical expertise helped transform our digital presence. Highly recommended!"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "They delivered our project on time and within budget. The results have been fantastic for our business growth."
    },
    {
      name: "Emma Thompson",
      role: "Product Manager",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Outstanding service and support throughout the entire process. They truly understand client needs."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (reviews.length * 400));
    }, 30);

    return () => clearInterval(interval);
  }, [reviews.length]);
  
  return (
    <section className="bg-gray-900 py-16 overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about working with us
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div 
            className="flex space-x-8" 
            style={{ transform: `translateX(${position}px)`, transition: 'transform 0.5s ease' }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[350px] bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
                <div className="mt-4 text-blue-500">
                  <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testiminials
