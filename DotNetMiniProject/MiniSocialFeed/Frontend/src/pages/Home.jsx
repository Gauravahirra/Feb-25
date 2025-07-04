import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Share2, Heart, MessageCircle } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Share2,
      title: 'Share Your Story',
      description: 'Easily create and share posts with text, images, and more. Express yourself and let your voice be heard.',
    },
    {
      icon: Heart,
      title: 'React & Engage',
      description: 'Show your appreciation by liking posts and connect with others by leaving thoughtful comments.',
    },
    {
      icon: MessageCircle,
      title: 'Build Community',
      description: 'Discover new people, follow interesting profiles, and build your own community of friends and followers.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Home - Mini Social Feed</title>
        <meta name="description" content="Join Mini Social Feed to connect, share, and build communities. The modern social platform for everyone." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Connect, Share, and
            <span className="block gradient-text mt-2">Discover Your World</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10"
          >
            Mini Social Feed is the perfect place to connect with friends, share your moments, and explore a vibrant community of creators.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/register">
              <Button className="w-full sm:w-auto social-button text-lg px-8 py-6">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why You'll Love Mini Social Feed</h2>
            <p className="mt-4 text-lg text-white/60">Everything you need to connect and share in one simple platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="text-center h-full post-card p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-card rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Conversation?</h2>
              <p className="text-lg text-white/70 mb-8">Create your free account today and start connecting with a global community.</p>
              <Link to="/register">
                <Button className="social-button text-lg px-8 py-6">
                  Sign Up Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}