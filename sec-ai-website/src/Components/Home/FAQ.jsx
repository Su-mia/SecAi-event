import React, { useState } from "react";

export default function FAQ() {
  // Track the currently open question
  const [activeIndex, setActiveIndex] = useState(null);

  // Array of FAQs
  const faqs = [
    {
      question: "Who can participate in Hack and Train?",
      answer:
        "H&T is open to everyone interested in AI or cybersecurity, regardless of their skill level. The event is designed to be beginner-friendly while still offering advanced challenges for experienced participants. Teams are recommended to have four members, but solo participants or smaller groups can also join and will be matched with others.",
    },
    {
      question: "What types of challenges can I expect?",
      answer:
        "Participants can expect a mix of cybersecurity Capture-the-Flag (CTF) challenges, AI-based problem-solving scenarios, and real-world case studies. The challenges are designed for participants with intermediate experience as well as advanced challenges",
    },
    {
      question: "What should I do if I have questions or need help during the event?",
      answer: "Our mentors and event staff will be available throughout the event to answer questions, provide guidance, and help troubleshoot any issues. Just reach out to them onsite or in our event communication channels.",
    },
    {
      question: " Do I need prior experience in AI or cybersecurity to join?",
      answer:
        "It\’s better to have some prior knowledge in AI or cybersecurity, as this will increase your chances of successfully tackling the challenges. That said, our mentors will be available throughout the event to assist you with any questions or provide guidance whenever needed.",
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
