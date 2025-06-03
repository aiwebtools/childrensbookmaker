
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Interactive Story Creation",
      description: "Answer simple questions about your story idea and watch as your children's book takes shape page by page."
    },
    {
      title: "Custom Illustrations",
      description: "Generate beautiful, child-friendly illustrations that match your story's characters and scenes perfectly."
    },
    {
      title: "Complete Story Structure",
      description: "Automatically create a well-structured narrative with beginning, middle, and end that engages young readers."
    },
    {
      title: "Character Consistency",
      description: "Characters maintain consistent appearance and personality throughout your entire picture book."
    },
    {
      title: "Page-by-Page Creation",
      description: "Build your book one page at a time with full control over each illustration and text segment."
    },
    {
      title: "Final PDF Compilation",
      description: "Compile your completed book into a ready-to-share PDF document with illustrations and text."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-cyber-dark/60" id="features" role="region" aria-labelledby="features-heading">
      <div className="container mx-auto">
        <header>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-cyber font-bold text-center mb-4 neon-text">
            Free AI Picture Book Maker Features
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover why educators, parents, and storytellers choose our free AI tools for creating engaging children's content
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article key={index} className="glass-panel p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyber-primary to-cyber-secondary" aria-hidden="true"></div>
              <h3 className="text-xl font-cyber font-semibold mb-4 text-cyber-accent">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
