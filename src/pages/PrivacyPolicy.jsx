import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Fill out our contact form</li>
              <li>Subscribe to our SMS notifications</li>
              <li>Communicate with us through our website</li>
            </ul>
            <p className="mt-4">
              This information may include your name, email address, phone number, and any messages you send to us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you SMS notifications about our services (if you opt-in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="font-semibold text-blue-800">
                <strong>Consent obtained via SMS will not be shared with third parties.</strong>
              </p>
              <p className="mt-2 text-blue-700">
                We want to be clear that any SMS consent and phone numbers you provide will not be transferred to third parties or affiliates. Your phone number and SMS preferences are kept confidential and used solely for our communication with you.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">SMS Opt-Out Instructions</h2>
            <p>
              If you no longer wish to receive SMS messages from Drolly Inc, you can opt-out at any time by:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Replying "STOP" to any SMS message you receive from us</li>
              <li>Replying "HELP" for assistance with our SMS service</li>
              <li>Contacting us directly through our website contact form</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our website contact form.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <Link to="/terms" className="text-blue-600 hover:text-blue-800 underline">
                  View our Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
