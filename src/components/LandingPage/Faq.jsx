import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const faqData = [
    {
      question: "What is Paypro?",
      answer:
        "Paypro is a comprehensive payment management tool designed to streamline financial transactions, providing small business owners with an efficient and user-friendly solution to manage payments.",
    },
    {
      question: "Why do I need Paypro as a small business owner?",
      answer:
        "Paypro is essential for small business owners as it simplifies payment processes, and offers a tailored solution to meet the unique needs of your business.",
    },
    {
      question: "Is PayPro free or paid?",
      answer:
        "PayPro is a paid service, offering premium features and functionality to optimize your payment management experience.",
    },
    {
      question: "What kind of business is Paypro for?",
      answer:
        "Paypro is suitable for all small businesses that offer services to their clients.",
    },
    {
      question: "Does my client see the profile created?",
      answer:
        "No, the profile created on Paypro is private, ensuring the confidentiality and security of your business processes.",
    },
    {
      question: "How do I submit complaints or suggestions?",
      answer:
        "You can submit complaints or suggestions through the dedicated email address. Our team is committed to addressing your feedback and continuously improving our services based on user input.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto mt-20 mb-20">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex-1">{faq.question}</div>
              {openIndex === index ? (
                <FaChevronUp className="text-xl" />
              ) : (
                <FaChevronDown className="text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
