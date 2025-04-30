
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is Children's Picture Book Maker GPT?",
      answer: "Children's Picture Book Maker GPT is an AI-powered tool that helps you create complete children's picture books page-by-page, including custom illustrations and engaging narratives tailored to your specific story ideas."
    },
    {
      question: "How does the book creation process work?",
      answer: "The process begins with answering questions about your story idea, characters, and preferred art style. Then the AI creates a complete outline for your approval. Once approved, you'll create each page individually with text and illustrations, with the ability to revise as needed until your book is complete."
    },
    {
      question: "What kind of illustrations can I create?",
      answer: "The tool creates child-friendly, picture book-style illustrations tailored to your story. It avoids photorealistic or abstract art styles, focusing instead on whimsical, engaging visuals appropriate for children's books."
    },
    {
      question: "Can I make edits to pages I don't like?",
      answer: "Absolutely! After each page is created, you'll have the opportunity to request changes to either the text or illustrations before moving on to the next page. This ensures your book matches your vision perfectly."
    },
    {
      question: "How long does it take to create a book?",
      answer: "The time varies depending on the length of your book and how many revisions you request. A typical 20-page picture book can be completed in 1-2 hours of active creation time."
    },
    {
      question: "Can I download my finished book?",
      answer: "Yes! Once your book is complete, the AI can compile all pages into a final PDF document that you can download, share, or print."
    },
    {
      question: "Do I need artistic or writing skills to use this?",
      answer: "No special skills are required. The AI assists with both the writing and illustration process, making it accessible to anyone regardless of their creative background."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6" id="faq">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cyber font-bold text-center mb-12 neon-text-pink">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-left py-6 text-cyber-accent font-cyber">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
