import React from 'react';
import Header from '../components/layout/Header';
import StateSelector from '../components/common/StateSelector';

export default function StateSelection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Select Your State</h1>
            <p className="mt-1 text-sm text-gray-600">
              Choose your state to view relevant CDL requirements and begin your test prep journey.
            </p>
          </div>
          <StateSelector />
        </div>
      </main>
    </div>
  );
}
