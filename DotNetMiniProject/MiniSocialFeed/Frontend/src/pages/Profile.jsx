import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Edit, Calendar, Mail, User, Heart, MessageSquare, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Profile() {
  const { user } = useAuth();
  const [userPosts, setUserPosts] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    totalLikes: 0,
    totalComments: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, postsRes] = await Promise.all([
          fetch('https://localhost:7247/api/users'),
          fetch('https://localhost:7247/api/posts')
        ]);
        const users = await usersRes.json();
        const posts = await postsRes.json();

        const totalUsers = users.length;
        const totalPosts = posts.length;
        const totalLikes = posts.reduce((sum, post) => sum + (Array.isArray(post.likes) ? post.likes.length : 0), 0);
        const totalComments = posts.reduce((sum, post) => sum + (post.comments?.length || 0), 0);

        const myPosts = posts.filter(post => post.authorId === user.id);

        setUserPosts(myPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setStats({
          totalUsers,
          totalPosts,
          totalLikes,
          totalComments
        });
      } catch (error) {
        console.error('Failed to load stats:', error);
      }
    };
    fetchStats();
  }, [user.id]);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      description: 'Registered users',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      description: 'Posts created overall',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Total Likes',
      value: stats.totalLikes,
      description: 'All likes received',
      icon: Heart,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Total Comments',
      value: stats.totalComments,
      description: 'All comments posted',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <Helmet>
          <title>Profile - Mini Social Feed</title>
          <meta name="description" content="View and manage your profile information and posts." />
        </Helmet>

        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-white/20">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="text-3xl">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold gradient-text mb-2">
                    {user?.firstName} {user?.lastName}
                  </h1>
                  <p className="text-white/70 text-lg mb-4 capitalize">{user?.role} Account</p>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {new Date(user?.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link to="/edit-profile">
                    <Button className="social-button">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Global Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <p className="text-white/60">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* You can keep your Recent Posts section as it was */}
      </div>
    </Layout>
  );
}
