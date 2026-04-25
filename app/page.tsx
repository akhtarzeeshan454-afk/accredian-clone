'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Email successfully sent to backend!');
      setEmail('');
    } else {
      alert('Something went wrong. Try again!');
    }
  };

  const features = [
    { title: 'Custom Training', description: 'Tailored courses for your specific business needs.' },
    { title: 'Expert Instructors', description: 'Learn from top-tier industry professionals.' },
    { title: 'Analytics Dashboard', description: 'Track employee progress and ROI in real-time.' }
  ];

  const testimonials = [
    { quote: "This platform completely changed how we train our new hires. Highly recommended!", author: "Sarah J., Tech Lead" },
    { quote: "The dashboard is incredibly intuitive and saved our team hours of manual tracking.", author: "Mark D., Operations Manager" }
  ];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <nav className="p-5 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Accredian</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Contact Us</button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-slate-50">
          <h2 className="text-4xl font-extrabold mb-4">Build Your Enterprise Page</h2>
          <p className="text-gray-600 mb-8 max-w-lg">Recreate the Accredian website using Next.js and Tailwind CSS.</p>

          {/* Lead Capture Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg flex-grow focus:outline-blue-600 text-black"
              required
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </form>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Why Choose Accredian?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: Testimonials Section */}
        <section className="py-16 bg-blue-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((test, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-600 italic mb-4">"{test.quote}"</p>
                  <p className="font-bold text-sm text-blue-600">{test.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* NEW: Footer Section */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <p>&copy; 2026 Accredian. Built for Internship Evaluation. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
