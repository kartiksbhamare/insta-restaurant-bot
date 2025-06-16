import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automated Daily Instagram Posts for Restaurants
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your restaurant's Instagram stays active — without lifting a finger.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
              <p className="text-gray-600">
                Create your restaurant's account in minutes
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Select Template</h3>
              <p className="text-gray-600">
                Choose your preferred post style and customization
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Auto-Post Daily</h3>
              <p className="text-gray-600">
                Let our system handle your daily Instagram posts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Templates Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Ready-to-Use Templates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Daily Special Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Daily Special</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Automatic dish highlights
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Price inclusion
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Custom hashtags
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Menu Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Weekly Menu</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Full menu showcase
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Seasonal specials
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Dietary info tags
                  </div>
                </div>
              </div>
            </div>

            {/* Event Promotion Template */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Event Promotion</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Special occasions
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Holiday themes
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    RSVP integration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Automated Scheduling</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Set your preferred posting times
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Automatic timezone adjustment
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Smart posting frequency optimization
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Content Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Bulk upload your menu items
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Auto-generated captions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Custom hashtag sets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © InstaChef 2025
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 