import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Save, Trash2, ArrowLeft, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export default function EditProfile() {
  const { user, updateProfile, deleteAccount } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    avatar: user?.avatar || ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await updateProfile({
      ...formData,
      role: user.role
    });
    if (success) {
      navigate('/profile');
    } else {
      // Show error toast if update fails
      if (window.toast) {
        window.toast({
          title: 'Update failed',
          description: 'Could not update your profile. Please try again.',
          variant: 'destructive',
        });
      } else {
        alert('Could not update your profile. Please try again.');
      }
    }
    
    setLoading(false);
  };

  const handleDeleteAccount = () => {
    deleteAccount();
    navigate('/login');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <Helmet>
          <title>Edit Profile - Mini Social Feed</title>
          <meta name="description" content="Update your profile information and account settings." />
        </Helmet>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => navigate('/profile')} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Profile</span>
          </Button>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Edit Profile</h1>
            <p className="text-white/70">Update your account information</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="animate-pulse-glow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-6 h-6" />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>Keep your profile up to date</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar">Avatar URL (Optional)</Label>
                  <Input id="avatar" name="avatar" type="url" placeholder="https://example.com/avatar.jpg" value={formData.avatar} onChange={handleChange} />
                </div>

                {formData.avatar && (
                  <div className="space-y-2">
                    <Label>Avatar Preview</Label>
                    <div className="flex items-center space-x-4">
                      <img
                        src={formData.avatar}
                        alt="Avatar preview"
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <p className="text-sm text-white/60">This is how your avatar will appear</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <Button type="button" variant="outline" onClick={() => navigate('/profile')}>Cancel</Button>
                  <Button type="submit" className="social-button" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Changes'}
                    <Save className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Danger Zone */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="text-red-400">Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div>
                  <h3 className="font-semibold text-red-400 mb-1">Delete Account</h3>
                  <p className="text-sm text-white/60">Permanently delete your account and all associated data</p>
                </div>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="flex items-center space-x-2">
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Account</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove all your data.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                        Yes, delete my account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}

