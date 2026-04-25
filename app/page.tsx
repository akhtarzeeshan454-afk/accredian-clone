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
    { icon: '🎯', title: 'Custom Training', description: 'Tailored courses for your specific business needs.' },
    { icon: '👨‍🏫', title: 'Expert Instructors', description: 'Learn from top-tier industry professionals.' },
    { icon: '📊', title: 'Analytics Dashboard', description: 'Track employee progress and ROI in real-time.' }
  ];

  const testimonials = [
    { quote: "This platform completely changed how we train our new hires. Highly recommended!", author: "Sarah J., Tech Lead" },
    { quote: "The dashboard is incredibly intuitive and saved our team hours of manual tracking.", author: "Mark D., Operations Manager" }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans">
      <div>
        {/* Navigation Bar */}
        <nav className="backdrop-blur-md bg-white/80 sticky top-0 z-50 p-5 border-b border-slate-100 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Accredian</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all hover:shadow-blue-200">
            Contact Us
          </button>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="relative">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3 block">Enterprise Ready</span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-5 text-slate-900 tracking-tight">
              Build Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Enterprise Page</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Recreate the Accredian website using Next.js and Tailwind CSS for top-tier performance.
            </p>

            {/* Lead Capture Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-blue-100 border border-slate-100">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 p-3 rounded-lg flex-grow focus:ring-0 focus:outline-none text-slate-900 placeholder:text-slate-400 text-base"
                required
              />
              <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition shadow-md shadow-blue-200">
                Get Started
              </button>
            </form>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Why Choose Accredian?</h3>
            <p className="text-slate-500">Industry-leading features built for scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 transition-colors rounded-xl flex items-center justify-center text-xl mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-12 text-slate-900">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((test, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left relative">
                  <span className="text-6xl text-blue-100 font-serif absolute top-4 left-4">“</span>
                  <div className="relative z-10">
                    <p className="text-slate-600 italic mb-6 text-base leading-relaxed">"{test.quote}"</p>
                    <p className="font-bold text-sm text-blue-600">{test.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white py-12 text-center text-sm border-t border-slate-800">
        <p className="text-slate-400">&copy; 2026 Accredian. Built for Internship Evaluation. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-slate-500">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
