import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Drolly Inc's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">SMS Messaging Terms</h2>
            <p>
              By subscribing to SMS messages via our web form, you agree to receive SMS messages from Drolly Inc. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Service notifications and updates</li>
              <li>Account-related information</li>
              <li>Promotional messages about our logistics services</li>
              <li>Conversational messages in response to your inquiries</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="font-semibold text-yellow-800">
                <strong>By subscribing to SMS messages via the web form, you agree to receive SMS messages from Drolly Inc. This includes conversational messages. Frequency of messages may vary. Message and data rates may apply. For help, text HELP. To opt-out, reply STOP.</strong>
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Message Frequency and Costs</h2>
            <p>
              The frequency of SMS messages may vary depending on your interactions with our services. Standard message and data rates may apply according to your mobile carrier's plan. Drolly Inc is not responsible for any charges incurred from your mobile carrier.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Opt-Out Instructions</h2>
            <p>
              You may opt-out of receiving SMS messages at any time by:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Replying "STOP" to any SMS message from Drolly Inc</li>
              <li>Replying "HELP" for assistance with our SMS service</li>
              <li>Contacting us through our website contact form</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Availability</h2>
            <p>
              SMS services are provided on a best-effort basis. We do not guarantee that SMS messages will be delivered or that the service will be available at all times. Network coverage, carrier limitations, and other factors may affect message delivery.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Logistics Services</h2>
            <p>
              Drolly Inc provides logistics and transportation services across the United States. Our services are subject to:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Availability of transportation resources</li>
              <li>Weather and road conditions</li>
              <li>Regulatory requirements and restrictions</li>
              <li>Terms outlined in individual service agreements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Drolly Inc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Drolly Inc's website, even if Drolly Inc or a Drolly Inc authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to Terms</h2>
            <p>
              Drolly Inc may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us through our website contact form.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                  View our Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
