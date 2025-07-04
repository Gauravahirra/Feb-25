import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function About() {
  const teamMembers = [
    {
      name: 'Gaurav Ahirrao',
      role: 'Frontend Developer',
      image: '/Images/Gaurav image.jpg',
      description: 'Passionate about creating beautiful and intuitive user experiences with React and modern web technologies.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'UI/UX Design']
    },
    {
      name: 'Shubhra Jyotsna Manhar',
      role: 'Backend Developer',
      image: '/Images/Shubhra.jpg',
      description: 'Expert in building robust and scalable backend systems using .NET Core and modern database technologies.',
      skills: ['.NET Core', 'C#', 'Entity Framework', 'SQL Server']
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <Helmet>
        <title>About Us - Mini Social Feed</title>
        <meta name="description" content="Learn about Mini Social Feed's mission, vision, and the team dedicated to building a better social platform." />
      </Helmet>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          About <span className="gradient-text">Mini Social Feed</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/70"
        >
          We're on a mission to create a more authentic, engaging, and positive social experience for everyone.
        </motion.p>
      </header>

      {/* Mission and Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
              alt="Team discussing ideas"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-white/70">
                  To provide a simple, beautiful, and ad-free platform where people can genuinely connect, share their passions, and foster meaningful communities without the noise of traditional social media.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-white/70">
                  We envision a digital world where social interaction is driven by shared interests and mutual respect, empowering users to control their data and their online experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="bg-background/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              The passionate individuals behind Mini Social Feed. We're a small but dedicated team focused on creating meaningful social experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <Card className="text-center post-card overflow-hidden h-full">
                  <div className="relative">
                    <div className="w-full h-96 md:h-[28rem] flex items-center justify-center overflow-hidden rounded-t-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="gradient-text font-semibold text-lg mb-4">{member.role}</p>
                    <p className="text-white/70 mb-6 leading-relaxed">{member.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}