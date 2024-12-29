'use client';

import React from 'react';

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Missing Person Search</h3>
            <p className="text-gray-600">Advanced facial recognition technology to help locate missing individuals quickly and efficiently.</p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Real-time Alerts</h3>
            <p className="text-gray-600">Instant notifications when potential matches are found in our database.</p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Database Management</h3>
            <p className="text-gray-600">Secure storage and management of missing person records and related information.</p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-600">Connect with local communities and organizations to expand search efforts.</p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance and support for urgent cases.</p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600">Advanced analytics to identify patterns and improve search effectiveness.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
