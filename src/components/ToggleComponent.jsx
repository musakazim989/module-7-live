import { useState } from "react"
export default function ToggleComponent() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=" w-3/4 p-40">
      {isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Hide Paragraph
        </button>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Show Paragraph
        </button>
      )}

      {isOpen && (
        <div>
          Bangladesh is a country with a growing software development industry.
          According to a report by the Bangladesh Association of Software and
          Information Services (BASIS), the software sector in Bangladesh
          generated $800 million in revenue in 2020, and employed more than
          300,000 professionals. Some of the notable software development
          projects in Bangladesh are: bKash: A mobile financial service platform
          that allows users to send and receive money, pay bills, and shop
          online using their mobile phones. Pathao: A ride-sharing and delivery
          app that connects drivers and riders, and also offers food, grocery,
          and courier services. Maya: A digital health platform that provides
          online consultations, health information, and mental health support to
          women and girls. Shohoz: A super app that offers online ticketing,
          ride-hailing, food delivery, and e-commerce services. These are some
          examples of how software development is transforming various sectors
          in Bangladesh and creating opportunities for innovation and social
          impact.
        </div>
      )}
    </div>
  )
}
