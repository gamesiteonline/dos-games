import { useEffect, useState } from 'react';
import { Zap, Users, Trophy, Gamepad2, Download, Star } from 'lucide-react';

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dos-bg overflow-hidden">
      {/* Animated scanlines background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="crt-scanlines h-full w-full" />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-dos-screen rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-dos-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl">
          <div className="mb-8 inline-block">
            <div className="px-6 py-2 border-2 border-dos-screen rounded-full text-dos-screen text-sm font-mono font-bold">
              [RETRO GAMING ARCHIVE]
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-courier text-dos-screen glow-pulse">
            GAMESITEONLINE
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-dos-screen-light font-courier">
            The Ultimate DOS Gaming Collection
          </p>

          <p className="text-lg mb-12 text-dos-screen-light/80 font-courier max-w-2xl mx-auto">
            Access thousands of classic DOS games with one-click downloads, advanced filtering, and community reviews. No external redirects. All downloads happen here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#games"
              className="btn-crt px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
            >
              <Gamepad2 className="w-5 h-5" />
              Browse Games
            </a>
            <a
              href="#features"
              className="btn-crt px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="panel-crt">
              <div className="text-3xl font-bold text-dos-screen mb-2">4650+</div>
              <div className="text-sm text-dos-screen-light">Games</div>
            </div>
            <div className="panel-crt">
              <div className="text-3xl font-bold text-dos-screen mb-2">100%</div>
              <div className="text-sm text-dos-screen-light">Free</div>
            </div>
            <div className="panel-crt">
              <div className="text-3xl font-bold text-dos-screen mb-2">∞</div>
              <div className="text-sm text-dos-screen-light">No Limits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-dos-screen font-courier">
            Why Choose Gamesiteonline?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="panel-crt group hover:shadow-lg transition-all">
              <div className="text-dos-screen mb-4">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dos-screen font-courier">
                In-Site Downloads
              </h3>
              <p className="text-dos-screen-light text-sm">
                All downloads happen within the site. No external redirects or sketchy links.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="panel-crt group hover:shadow-lg transition-all">
              <div className="text-dos-screen mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dos-screen font-courier">
                Advanced Filtering
              </h3>
              <p className="text-dos-screen-light text-sm">
                Filter by genre, format, rating, and more. Find exactly what you're looking for.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="panel-crt group hover:shadow-lg transition-all">
              <div className="text-dos-screen mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dos-screen font-courier">
                Community Driven
              </h3>
              <p className="text-dos-screen-light text-sm">
                Read reviews, leave ratings, and connect with other retro gaming enthusiasts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="panel-crt group hover:shadow-lg transition-all">
              <div className="text-dos-screen mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dos-screen font-courier">
                Curated Collections
              </h3>
              <p className="text-dos-screen-light text-sm">
                Discover hand-picked game collections and trending titles from the community.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="panel-crt group hover:shadow-lg transition-all">
              <div className="text-dos-screen mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dos-screen font-courier">
                Lightning Fast
              </h3>
              <p className="text-dos-screen-light text-sm">
                Optimized for speed. Search, filter, and download in seconds.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="panel-crt group hover:shadow-lg transition-all">
              <div className="text-dos-screen mb-4">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dos-screen font-courier">
                Setup Guides
              </h3>
              <p className="text-dos-screen-light text-sm">
                Learn how to set up emulators and play your favorite games with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto panel-crt text-center">
          <h2 className="text-3xl font-bold mb-6 text-dos-screen font-courier">
            Ready to Dive Into Retro Gaming?
          </h2>
          <p className="text-dos-screen-light mb-8 max-w-2xl mx-auto">
            Join thousands of retro gaming enthusiasts. Browse our collection of 4650+ DOS games, read community reviews, and start downloading today.
          </p>
          <a href="#games" className="btn-crt px-8 py-4 text-lg font-bold inline-flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Start Exploring
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-dos-screen-dark pt-8 pb-4 px-4 text-center text-xs font-courier opacity-75">
        <p className="mb-2">Gamesiteonline © 2026 | Owner: Fahad | Tanzania</p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://wa.me/qr/FYVTX2AFYSUVH1" target="_blank" rel="noopener noreferrer" className="hover:text-dos-screen">
            WhatsApp
          </a>
          <a href="https://whatsapp.com/channel/0029VbChyDUI1rcht5jajL3q" target="_blank" rel="noopener noreferrer" className="hover:text-dos-screen">
            Channel
          </a>
          <a href="https://www.instagram.com/ard.sing?igsh=NnQ3ZWVmYXh4b2Zn" target="_blank" rel="noopener noreferrer" className="hover:text-dos-screen">
            Instagram
          </a>
          <a href="https://www.threads.com/@ard.sing" target="_blank" rel="noopener noreferrer" className="hover:text-dos-screen">
            Threads
          </a>
        </div>
      </div>
    </div>
  );
}
