import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background/50 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Mini Social</span>
            </Link>
            <p className="text-white/60 text-base">
              The modern social platform to connect, share, and build communities.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white"><Twitter /></a>
              <a href="#" className="text-white/60 hover:text-white"><Github /></a>
              <a href="#" className="text-white/60 hover:text-white"><Linkedin /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Commerce</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/contact" className="text-base text-white/60 hover:text-white">Contact Us</Link></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">API Status</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-white/60 hover:text-white">About</Link></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Jobs</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-base text-white/60 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-base text-white/60 xl:text-center">&copy; 2025 Mini Social Feed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}