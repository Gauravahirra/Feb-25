import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, MessageCircle, Share2, Trash2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

export default function Feed() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [commentText, setCommentText] = useState({});

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const res = await fetch('https://localhost:7247/api/posts');
    const data = await res.json();
    setPosts(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };

  const getUserById = (userId) => {
    return users.find(u => u.id === userId) || { firstName: 'Unknown', lastName: 'User' };
  };

  const handleLike = async (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id !== postId) return post;
        const isLiked = post.likes?.some(like => like.userId === user.id);
        return {
          ...post,
          likes: isLiked
            ? post.likes.filter(like => like.userId !== user.id)
            : [...(post.likes || []), { userId: user.id }]
        };
      })
    );

    const res = await fetch(`https://localhost:7247/api/posts/${postId}/likes`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user.id)
    });

    if (!res.ok) {
      loadPosts();
      toast({ title: "Error", description: "Failed to update like." });
    }
  };

  const handleComment = async (postId) => {
    const comment = commentText[postId]?.trim();
    if (!comment) return;
    const res = await fetch(`https://localhost:7247/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: comment, authorId: user.id })
    });
    if (res.ok) {
      setCommentText(prev => ({ ...prev, [postId]: '' }));
      loadPosts();
      toast({ title: "Comment added!", description: "Your comment has been posted" });
    }
  };

  const handleDeletePost = async (postId) => {
    const res = await fetch(`https://localhost:7247/api/posts/${postId}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      loadPosts();
      toast({ title: "Post deleted", description: "Your post has been removed" });
    }
  };

  const handleDeleteComment = async (postId, commentId) => {
    const res = await fetch(`https://localhost:7247/api/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      loadPosts();
      toast({ title: "Comment deleted", description: "The comment has been removed" });
    } else {
      toast({ title: "Error", description: "Failed to delete comment." });
    }
  };

  const handleShare = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <Helmet>
          <title>Feed - Mini Social Feed</title>
          <meta name="description" content="Discover and interact with posts from your community." />
        </Helmet>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-2">Community Feed</h1>
          <p className="text-white/70">Discover what's happening in your network</p>
        </motion.div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-2xl"
                alt="Empty feed illustration"
                src="https://images.unsplash.com/photo-1629612459784-38f4ad4bd3c4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">No posts yet</h3>
              <p className="text-white/60 mb-6">Be the first to share something with the community!</p>
              <Button className="social-button">Create Your First Post</Button>
            </motion.div>
          ) : (
            posts.map((post, index) => {
              const author = post.author || getUserById(post.authorId);
              const isLiked = post.likes?.some(like => like.userId === user.id);
              const likesCount = post.LikesCount ?? (post.likes?.length || 0);
              const commentsCount = post.CommentsCount ?? (post.comments?.length || 0);
              const canDeletePost = post.authorId === user.id || user.role === 'admin' || user.role === 'user';

              return (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="post-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={author.avatar} />
                            <AvatarFallback>{author.firstName?.[0]}{author.lastName?.[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-white">{author.firstName} {author.lastName}</p>
                            <p className="text-sm text-white/60">{new Date(post.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        {canDeletePost && (
                          <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)} className="text-red-400 hover:text-red-300 hover:bg-red-500/20">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-white leading-relaxed">{post.content}</p>
                      {post.image && (
                        <img src={post.image} alt="Post content" className="w-full rounded-xl object-cover max-h-96" />
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-6">
                          <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)} className={`flex items-center space-x-2 ${isLiked ? 'text-red-500 hover:text-red-400' : 'text-white/60 hover:text-white'}`}>
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                            <span>{likesCount}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-white/60 hover:text-white">
                            <MessageCircle className="w-5 h-5" />
                            <span>{commentsCount}</span>
                          </Button>
                          <Button variant="ghost" size="sm" onClick={handleShare} className="flex items-center space-x-2 text-white/60 hover:text-white">
                            <Share2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>

                      {/* Comments */}
                      {post.comments && post.comments.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-white/10">
                          {post.comments.map((comment) => {
                            const commentAuthor = comment.author || getUserById(comment.authorId);
                            const canDeleteComment = comment.authorId === user.id || user.role === 'admin';

                            return (
                              <div key={comment.id} className="flex items-start justify-between space-x-3">
                                <div className="flex items-start space-x-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage src={commentAuthor.avatar} />
                                    <AvatarFallback className="text-xs">
                                      {commentAuthor.firstName?.[0]}{commentAuthor.lastName?.[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1 bg-white/5 rounded-xl p-3">
                                    <p className="font-semibold text-sm text-white">
                                      {commentAuthor.firstName} {commentAuthor.lastName}
                                    </p>
                                    <p className="text-white/80 text-sm">{comment.text}</p>
                                  </div>
                                </div>
                                {canDeleteComment && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleDeleteComment(post.id, comment.id)}
                                    className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Add Comment */}
                      <div className="flex items-center space-x-3 pt-4">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback className="text-xs">
                            {user.firstName?.[0]}{user.lastName?.[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 flex space-x-2">
                          <Textarea
                            placeholder="Write a comment..."
                            value={commentText[post.id] || ''}
                            onChange={(e) => setCommentText(prev => ({ ...prev, [post.id]: e.target.value }))}
                            className="min-h-[40px] resize-none"
                          />
                          <Button onClick={() => handleComment(post.id)} disabled={!commentText[post.id]?.trim()} size="sm" className="social-button">
                            Post
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
}
