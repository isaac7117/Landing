// src/pages/PrivacyPolicy.tsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-lg italic">Last updated: March 24, 2025</p>
        </header>

        {/* Content Container */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">Privacy Policy Generator</a>.
            </p>
          </section>

          {/* Interpretation Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Interpretation and Definitions</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Interpretation</h3>
              <p className="text-gray-700 leading-relaxed">
                The words of which the initial letter is capitalized have meanings defined under the following conditions...
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Definitions</h3>
              <ul className="space-y-4 pl-5 list-disc text-gray-700">
                <li>
                  <strong className="text-gray-900">Account</strong> means a unique account created for You to access our Service...
                </li>
                {/* Repetir para otros elementos de la lista */}
              </ul>
            </div>
          </section>

          {/* Data Collection Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Collecting and Using Your Personal Data</h2>
            
            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Types of Data Collected</h3>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Personal Data</h4>
                  <p className="text-gray-700">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information...
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Usage Data</li>
                  </ul>
                </div>
              </div>

              {/* Tracking Technologies */}
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tracking Technologies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-indigo-600">Essential Cookies</h4>
                    <p className="text-sm text-gray-600 mt-1">Required for core functionality</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-indigo-600">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 mt-1">Help us improve our services</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-indigo-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy:
            </p>
            <div className="mt-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:root@gmail.com" className="text-indigo-600 hover:underline">root@gmail.com</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;