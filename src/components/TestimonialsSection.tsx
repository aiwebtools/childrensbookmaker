
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I created a beautiful birthday book for my daughter in less than an hour! The illustrations were magical and she loved seeing herself as the main character.",
      author: "Sarah M.",
      role: "Parent & Educator"
    },
    {
      quote: "As a teacher, I've used this tool to create custom stories that engage my students and teach important lessons. The cyberpunk-style illustrations are a huge hit!",
      author: "Michael T.",
      role: "Elementary School Teacher"
    },
    {
      quote: "I'm not artistic at all but was able to make a professional-looking picture book for my nephew. The step-by-step process made it so easy and fun.",
      author: "Jamie L.",
      role: "First-time Author"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-cyber-dark/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cyber font-bold text-center mb-12 neon-text">
          What People Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-panel p-6 relative group hover:-translate-y-1 transition-transform duration-300">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-cyber-primary opacity-20 text-4xl font-serif">"</div>
              
              {/* Testimonial content */}
              <div className="mt-6">
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-cyber font-medium text-cyber-secondary">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-cyber-secondary opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
