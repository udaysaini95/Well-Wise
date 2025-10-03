import React from "react";

export default function About() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    alert("Form submitted successfully!");
    // You can add logic to send data to your backend here
  };

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4021262/pexels-photo-4021262.jpeg"
          alt="A person doing yoga in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-white min-h-screen flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="pt-6 pb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ">
            Fill the <span className="text-green-400">Well Form</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
            Well Wise is your personal AI health assistant, designed to
            transform your health data into actionable wellness guidance. Our
            mission is to provide personalized, intelligent insights to help you
            make informed decisions about your health.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-12 w-full max-w-lg bg-white/90 backdrop-blur-md p-8 md:p-10 lg:p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Get Your Health Report
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border-2 border-transparent rounded-md focus:border-green-500 focus:ring-green-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border-2 border-transparent rounded-md focus:border-green-500 focus:ring-green-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border-2 border-transparent rounded-md focus:border-green-500 focus:ring-green-500 transition-colors"
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="medicalHistory"
                className="block text-sm font-medium"
              >
                Medical History (e.g., allergies, conditions)
              </label>
              <textarea
                id="medicalHistory"
                name="medicalHistory"
                rows="3"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border-2 border-transparent rounded-md focus:border-green-500 focus:ring-green-500 transition-colors"
              ></textarea>
            </div>
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium">
                Current Symptoms (if any)
              </label>
              <textarea
                id="symptoms"
                name="symptoms"
                rows="3"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border-2 border-transparent rounded-md focus:border-green-500 focus:ring-green-500 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full text-white bg-gradient-to-r from-green-500 to-lime-600 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
