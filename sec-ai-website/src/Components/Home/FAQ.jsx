import React, { useState } from "react";

export default function FAQ() {
  // Track the currently open question
  const [activeIndex, setActiveIndex] = useState(null);

  // Array of FAQs
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days for standard delivery.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via email and phone.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you will receive a tracking number once your order has been shipped.",
    },
  ];

  // Function to toggle the active question
  const toggleFAQ = (index) => {
    // If the clicked question is already open, close it by setting activeIndex to null
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-sm sm:max-w-2xl mx-auto p-6 " id="faqs">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">
        FAQ
      </h2>
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 text-violetMedium">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 text-violetMedium">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-violetMedium rounded-lg p-4 transition-all duration-300"
          >
            {/* Question */}
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-sm sm:text-lg font-semibold">{faq.question}</h3>
              <span className="text-sm sm:text-lg">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <div className="mt-2 text-sm sm:text-md text-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
