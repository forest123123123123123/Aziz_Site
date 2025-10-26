import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Drolly Inc</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner in logistics and transportation across America
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Reliable, efficient, and safe transportation services to all 50 states
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p>
                Since 2017, we've been on the road delivering goods across the United States of America. 
                With a team full of dedicated logistics professionals, we provide reliable, efficient, 
                and safe transportation services to all 50 states. From small shipments to full loads, 
                we make sure every delivery arrives where it needs to be — on time and handled with care.
              </p>
              <p>
                Each year, our fleet covers more than 18,000,000 miles, keeping businesses supplied 
                and communities connected. We take pride in being a trusted name in American logistics, 
                built on hard work, experience, and a commitment to doing things the right way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
