import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Send, Image, Smile } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

export default function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please write something before posting",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    const newPost = {
      Content: content.trim(),
      Image: imageUrl || null,
      AuthorId: user.id,
      CreatedAt: new Date().toISOString()
    };
    
    const res = await fetch('https://localhost:7247/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    });
    
    if (res.ok) {
      toast({
        title: "Post created!",
        description: "Your post has been shared with the community",
      });
      setLoading(false);
      navigate('/feed');
    }
  };

  const handleImageUpload = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Helmet>
          <title>Create Post - Mini Social Feed</title>
          <meta name="description" content="Share your thoughts and connect with your community." />
        </Helmet>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-2">Create New Post</h1>
            <p className="text-white/70">Share your thoughts with the community</p>
          </div>

          {/* Create Post Form */}
          <Card className="animate-pulse-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smile className="w-6 h-6" />
                <span>What's on your mind?</span>
              </CardTitle>
              <CardDescription>
                Express yourself and connect with others
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="content">Post Content</Label>
                  <Textarea
                    id="content"
                    placeholder="What would you like to share today?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[150px] resize-none"
                    required
                  />
                  <p className="text-xs text-white/60">
                    {content.length}/500 characters
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL (Optional)</Label>
                  <Input
                    id="imageUrl"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                
                {/* Image Preview */}
                {imageUrl && (
                  <div className="space-y-2">
                    <Label>Image Preview</Label>
                    <div className="rounded-xl overflow-hidden border border-white/20">
                      <img 
                        src={imageUrl} 
                        alt="Preview" 
                        className="w-full h-48 object-cover"
                        onError={() => setImageUrl('')}
                      />
                    </div>
                  </div>
                )}
                
                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleImageUpload}
                      className="flex items-center space-x-2"
                    >
                      <Image className="w-4 h-4" />
                      <span>Upload Image</span>
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate('/feed')}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="social-button"
                      disabled={loading || !content.trim()}
                    >
                      {loading ? 'Posting...' : 'Share Post'}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Posting Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-white">Be authentic</p>
                    <p>Share genuine thoughts and experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-white">Engage others</p>
                    <p>Ask questions to start conversations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-white">Add visuals</p>
                    <p>Images make posts more engaging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-white">Stay positive</p>
                    <p>Spread good vibes in the community</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
