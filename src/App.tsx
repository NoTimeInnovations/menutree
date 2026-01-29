import { Instagram, Twitter, Mail, Phone, Globe, Linkedin } from 'lucide-react';
import Tiktok from './TiktokIcon';
function App() {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/menu.there' },
    { icon: Twitter, url: 'https://x.com/menuthere' },
    { icon: Tiktok, url: 'https://www.tiktok.com/@menuthere' },
    { icon: Mail, url: 'mailto:menuthere@gmail.com' },
    { icon: Phone, url: 'https://wa.me/917012944024' },
    { icon: Globe, url: 'https://www.menuthere.com/' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/menuthere/' }
  ];

  const founders = [
    { name: 'Thrisha K', url: 'https://www.linkedin.com/in/thrishakannan/' },
    { name: 'Muhammed Rinshad', url: 'https://www.linkedin.com/in/muhammedrinshad/' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 h-32"></div>

          <div className="relative px-8 pb-8">
            <div className="flex flex-col items-center -mt-16">
              <div className="bg-white p-2 rounded-2xl shadow-xl">
                <img
                  src="/logo.png"
                  alt="MenuThere Logo"
                  className="w-32 h-32 rounded-xl"
                />
              </div>

              <h1 className="mt-6 text-4xl font-bold text-gray-800">MenuThere</h1>
              <p className="mt-2 text-xl text-orange-600 font-semibold">Change prices, not menus</p>

              <div className="mt-6 flex gap-4 justify-center flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-orange-600 text-orange-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why MenuThere</h2>

              <div className="relative h-96 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 25% 50% Q 40% 30%, 50% 40% T 75% 50%"
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 25% 50% Q 40% 70%, 50% 60% T 75% 50%"
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-8 px-6" style={{ zIndex: 1 }}>
                  <div className="flex flex-col gap-6 items-center lg:items-end">
                    {features.slice(0, 2).map((feature, index) => (
                      <div
                        key={index}
                        className="group relative w-48 h-24 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300"></div>
                        <span className="relative z-10 text-white font-bold text-center px-4 text-sm leading-tight">
                          {feature}
                        </span>
                        <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-6 items-center lg:items-start">
                    {features.slice(2, 4).map((feature, index) => (
                      <div
                        key={index + 2}
                        className="group relative w-48 h-24 bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-300"></div>
                        <span className="relative z-10 text-white font-bold text-center px-4 text-sm leading-tight">
                          {feature}
                        </span>
                        <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.menuthere.com/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Create Your Menu for Free
              </a>
            </div>


            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">Our Founders</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                {founders.map((founder, index) => (
                  <a
                    key={index}
                    href={founder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 group"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
                      {founder.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm">
              <p>© 2026 MenuThere. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
