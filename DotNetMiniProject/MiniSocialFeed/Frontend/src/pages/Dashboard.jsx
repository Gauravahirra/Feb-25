import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, MessageSquare, Heart, TrendingUp, Plus, Eye, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    totalLikes: 0,
    totalComments: 0,
    userPosts: 0,
    userLikes: 0
  });

  useEffect(() => {
    // Fetch users from backend API
    fetch('https://localhost:7247/api/users')
      .then(res => res.json())
      .then(fetchedUsers => {
        // Fetch posts from backend API
        fetch('https://localhost:7247/api/posts')
          .then(res => res.json())
          .then(fetchedPosts => {
            const userPosts = fetchedPosts.filter(post => post.authorId === user.id);
            const userLikes = fetchedPosts.reduce((total, post) => {
              return total + (Array.isArray(post.likes) && post.likes.some(like => like.userId === user.id) ? 1 : 0);
            }, 0);
            const totalLikes = fetchedPosts.reduce((total, post) => total + (Array.isArray(post.likes) ? post.likes.length : 0), 0);
            const totalComments = fetchedPosts.reduce((total, post) => total + (post.comments?.length || 0), 0);
            setStats({
              totalUsers: fetchedUsers.length,
              totalPosts: fetchedPosts.length,
              totalLikes,
              totalComments,
              userPosts: userPosts.length,
              userLikes
            });
          })
          .catch(() => {
            setStats(prev => ({
              ...prev,
              totalPosts: 0,
              totalLikes: 0,
              totalComments: 0,
              userPosts: 0,
              userLikes: 0
            }));
          });
      })
      .catch(() => {
        setStats(prev => ({
          ...prev,
          totalUsers: 0
        }));
      });
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
      description: 'Posts created',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Total Likes',
      value: stats.totalLikes,
      description: 'Likes given',
      icon: Eye,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Total Comments',
      value: stats.totalComments,
      description: 'Comments posted',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <Helmet>
          <title>Dashboard - Mini Social Feed</title>
          <meta name="description" content="Your personal dashboard with stats and quick actions." />
        </Helmet>

        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">
                Welcome back, {user?.firstName}! 👋
              </h1>
              <p className="text-white/70 text-lg">
                Ready to connect and share with your community?
              </p>
            </div>
            <div className="hidden md:block">
              <img  
                className="w-32 h-32 rounded-2xl object-cover" 
                alt="Dashboard illustration"
               src="https://images.unsplash.com/photo-1691052710117-b5fed5bd90c3" />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:scale-105 transition-transform duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white/70">
                      {stat.title}
                    </CardTitle>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs text-white/60">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Jump into the action with these popular features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/create-post">
                  <Button className="w-full social-button h-16 text-lg">
                    <Plus className="w-6 h-6 mr-2" />
                    Create New Post
                  </Button>
                </Link>
                
                <Link to="/feed">
                  <Button variant="outline" className="w-full h-16 text-lg border-white/20 hover:bg-white/10">
                    <Eye className="w-6 h-6 mr-2" />
                    Browse Feed
                  </Button>
                </Link>
                
                <Link to="/edit-profile">
                  <Button variant="outline" className="w-full h-16 text-lg border-white/20 hover:bg-white/10">
                    <User className="w-6 h-6 mr-2" />
                    Edit My Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Stay up to date with what's happening in your network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white">Welcome to Mini Social Feed!</p>
                    <p className="text-sm text-white/60">Start by creating your first post</p>
                  </div>
                  <span className="text-xs text-white/40">Just now</span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white">Account created successfully</p>
                    <p className="text-sm text-white/60">Your profile is ready to go</p>
                  </div>
                  <span className="text-xs text-white/40">Today</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
