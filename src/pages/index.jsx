import React from 'react';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1>Welcome to CDL Evolution Training</h1>
      </main>
    </div>
  );
}