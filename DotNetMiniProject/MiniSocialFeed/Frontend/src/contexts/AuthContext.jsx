import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { toast } from '@/components/ui/use-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ------------------------------------------------------------------ */
  /* Restore user from localStorage on first load                       */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      setUser(JSON.parse(stored));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  /* ------------------------------------------------------------------ */
  /* LOGIN                                                              */
  /* ------------------------------------------------------------------ */
  const login = async (email, password) => {
    try {
      const res = await fetch('https://localhost:7247/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password, // ✅ backend expects "password"
        }),
      });

      if (!res.ok) throw new Error('Login failed');
      const loggedInUser = await res.json();

      setUser(loggedInUser);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(loggedInUser));

      toast({
        title: 'Welcome back!',
        description: `Logged in successfully as ${loggedInUser.role}`,
      });
      return true;
    } catch (err) {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password',
        variant: 'destructive',
      });
      return false;
    }
  };

  /* ------------------------------------------------------------------ */
  /* REGISTER                                                           */
  /* ------------------------------------------------------------------ */
  const register = async (rawData) => {
    try {
      /* Strip confirmPassword (frontend‑only) and map to backend shape */
      const {
        confirmPassword,
        passwordHash, // might exist if caller used previous version
        ...rest
      } = rawData;

      const payload = {
        ...rest,
        password: passwordHash ?? rawData.password, // ✅ send "password"
      };

      const res = await fetch('https://localhost:7247/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Registration failed');

      toast({
        title: 'Registration successful!',
        description: 'Please log in with your credentials',
      });
      return true;
    } catch (err) {
      toast({
        title: 'Registration failed',
        description: 'Email already exists',
        variant: 'destructive',
      });
      return false;
    }
  };

  /* ------------------------------------------------------------------ */
  /* LOGOUT                                                             */
  /* ------------------------------------------------------------------ */
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
    toast({
      title: 'Logged out',
      description: 'See you next time!',
    });
  };

  /* ------------------------------------------------------------------ */
  /* UPDATE PROFILE (PUT /api/users/:id)                                */
  /* ------------------------------------------------------------------ */
  const updateProfile = async (updatedData) => {
    if (!user) return false;
    try {
      // Ensure all required fields are sent
      const payload = {
        id: user.id,
        firstName: updatedData.firstName ?? user.firstName,
        lastName: updatedData.lastName ?? user.lastName,
        email: updatedData.email ?? user.email,
        role: updatedData.role ?? user.role,
        createdAt: user.createdAt
      };
      const res = await fetch(
        `https://localhost:7247/api/users/${user.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error('Update failed');

      // Fetch the latest user details from backend after update
      const updatedUserRes = await fetch(`https://localhost:7247/api/users/${user.id}`);
      const freshUser = updatedUserRes.ok ? await updatedUserRes.json() : await res.json();
      setUser({
        ...user,
        ...freshUser
      });
      localStorage.setItem('currentUser', JSON.stringify({
        ...user,
        ...freshUser
      }));
      toast({
        title: 'Profile updated!',
        description: 'Your changes have been saved',
      });
      return true;
    } catch {
      return false;
    }
  };

  /* ------------------------------------------------------------------ */
  /* DELETE ACCOUNT (placeholder)                                       */
  /* ------------------------------------------------------------------ */
  const deleteAccount = async () => {
    try {
      const res = await fetch(`https://localhost:7247/api/users/${user.id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        logout();
        toast({
          title: 'Account deleted',
          description: 'Your account has been permanently deleted',
        });
      } else {
        toast({
          title: 'Delete failed',
          description: 'Could not delete your account',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Delete failed',
        description: 'Could not delete your account',
        variant: 'destructive',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        updateProfile,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
