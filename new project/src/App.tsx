import { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  BarChart2, 
  Shield, 
  Bell, 
  Terminal, 
  CheckCircle2,
  Server
} from 'lucide-react';
import './index.css';

function App() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
      const scale = 0.5 + (scrollPercentage * 1.5);
      
      imageRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Server className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">CitizenDeveloperApp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Docs</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">Sign in</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start for free
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="animate-color">
                Build Smarter, Launch Faster<br />with Citizen Developer App
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your ideas into reality without writing a single line of code
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                Start monitoring now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50">
                Schedule demo
              </button>
            </div>
          </div>
          <div className="mt-16 overflow-hidden">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl transform scale-50 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border hover:shadow-lg transition">
              <BarChart2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure Monitoring</h3>
              <p className="text-gray-600">Monitor your servers, containers, and cloud services in real-time.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border hover:shadow-lg transition">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">Keep your infrastructure secure with advanced security monitoring.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border hover:shadow-lg transition">
              <Bell className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Incident Management</h3>
              <p className="text-gray-600">Get notified instantly when issues occur in your systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Engineering Teams Worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands of companies monitoring their infrastructure</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center h-20 bg-white rounded-lg">
                <div className="text-xl font-bold text-gray-400">LOGO {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Everything You Need for Modern Observability</h2>
              <div className="space-y-4">
                {[
                  'Real-time infrastructure monitoring',
                  'Log management and analysis',
                  'Incident management and alerting',
                  'Team collaboration tools'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Terminal className="w-full h-full text-blue-600 opacity-10 absolute" />
              <div className="bg-gray-900 rounded-xl p-6 relative">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`$ devstack monitor start
✓ Connecting to infrastructure
✓ Initializing monitors
✓ Starting data collection
✓ Dashboard ready at https://app.devstack.com`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Monitoring Your Stack Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with our free tier. No credit card required.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
            Start for free
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 CitizenDeveloperApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;