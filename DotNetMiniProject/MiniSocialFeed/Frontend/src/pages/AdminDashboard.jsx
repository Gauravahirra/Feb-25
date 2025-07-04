import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, MessageSquare, Trash2, Shield, Eye, Ban, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from '@/components/ui/use-toast';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    totalLikes: 0,
    totalComments: 0
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // Fetch users from backend API
    fetch('https://localhost:7247/api/users')
      .then(res => res.json())
      .then(fetchedUsers => {
        setUsers(fetchedUsers);
        setStats(prev => ({
          ...prev,
          totalUsers: fetchedUsers.length
        }));
      })
      .catch(() => {
        setUsers([]);
        setStats(prev => ({
          ...prev,
          totalUsers: 0
        }));
      });

    // Fetch posts from backend API
    fetch('https://localhost:7247/api/posts')
      .then(res => res.json())
      .then(fetchedPosts => {
        setPosts(fetchedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        const totalLikes = fetchedPosts.reduce((total, post) => total + (Array.isArray(post.likes) ? post.likes.length : 0), 0);
        const totalComments = fetchedPosts.reduce((total, post) => total + (post.comments?.length || 0), 0);
        setStats(prev => ({
          ...prev,
          totalPosts: fetchedPosts.length,
          totalLikes,
          totalComments
        }));
      })
      .catch(() => {
        setPosts([]);
        setStats(prev => ({
          ...prev,
          totalPosts: 0,
          totalLikes: 0,
          totalComments: 0
        }));
      });
  };

  const getUserById = (userId) => {
    return users.find(u => u.id === userId) || { firstName: 'Unknown', lastName: 'User' };
  };

  const handleDeleteUser = (userId) => {
    if (userId === user.id) {
      toast({
        title: "Cannot delete yourself",
        description: "You cannot delete your own account from here",
        variant: "destructive",
      });
      return;
    }
    
    const updatedUsers = users.filter(u => u.id !== userId);
    const updatedPosts = posts.filter(p => p.authorId !== userId);
    
    setUsers(updatedUsers);
    setPosts(updatedPosts);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    
    toast({
      title: "User deleted",
      description: "User and all their content has been removed",
    });
    
    loadData();
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(p => p.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    
    toast({
      title: "Post deleted",
      description: "Post has been removed",
    });
    
    loadData();
  };

  const handleBanUser = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

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
          <title>Admin Dashboard - Mini Social Feed</title>
          <meta name="description" content="Manage users, posts, and platform statistics." />
        </Helmet>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
              <p className="text-white/70 text-lg">Manage your platform and community</p>
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

        {/* Users Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage registered users and their accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((userData) => (
                  <div key={userData.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={userData.avatar} />
                        <AvatarFallback>
                          {userData.firstName?.[0]}{userData.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">
                          {userData.firstName} {userData.lastName}
                        </p>
                        <p className="text-sm text-white/60">{userData.email}</p>
                        <p className="text-xs text-white/40 capitalize">
                          {userData.role} • Joined {new Date(userData.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleBanUser}
                        className="flex items-center space-x-1"
                      >
                        <Ban className="w-4 h-4" />
                        <span>Ban</span>
                      </Button>
                      
                      {userData.id !== user.id && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              className="flex items-center space-x-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Delete</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete User</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete {userData.firstName} {userData.lastName}? 
                                This will permanently remove their account and all associated content.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteUser(userData.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete User
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Posts Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Posts Management</CardTitle>
              <CardDescription>
                Monitor and moderate community posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.slice(0, 10).map((post) => {
                  const author = getUserById(post.authorId);
                  return (
                    <div key={post.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={author.avatar} />
                              <AvatarFallback className="text-xs">
                                {author.firstName?.[0]}{author.lastName?.[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-white text-sm">
                                {author.firstName} {author.lastName}
                              </p>
                              <p className="text-xs text-white/60">
                                {new Date(post.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mb-2 line-clamp-2">{post.content}</p>
                          <div className="flex items-center space-x-4 text-xs text-white/60">
                            <Button
                              onClick={async () => {
                                const isLiked = post.likes?.some(like => like.userId === user.id);
                                setPosts(prevPosts => prevPosts.map(p => {
                                  if (p.id !== post.id) return p;
                                  return {
                                    ...p,
                                    likes: isLiked
                                      ? p.likes.filter(like => like.userId !== user.id)
                                      : [...(p.likes || []), { userId: user.id }]
                                  };
                                }));
                                await fetch(`https://localhost:7247/api/posts/${post.id}/likes`, {
                                  method: 'PUT',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify(user.id)
                                });
                              }}
                              className={`flex items-center space-x-2 ${post.likes?.some(like => like.userId === user.id) ? 'text-red-500 hover:text-red-400' : 'text-white/60 hover:text-white'}`}
                            >
                              <Heart className={`w-4 h-4 ${post.likes?.some(like => like.userId === user.id) ? 'fill-current' : ''}`} />
                              <span>{post.likes?.length || 0}</span>
                            </Button>
                            <span>{post.comments?.length || 0} comments</span>
                          </div>
                        </div>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              className="flex items-center space-x-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Post</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this post? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeletePost(post.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete Post
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  );
                })}
                
                {posts.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-white/60">No posts to display</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
