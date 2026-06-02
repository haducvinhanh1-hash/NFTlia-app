import { useCallback, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-app/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function useEmailSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signIn = useCallback(async (email, password) => {
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Signed in successfully!', { pauseOnHover: false });
      navigate('/dashboard');
    } catch (err) {
      let errorMsg = 'Sign-in failed';
      
      if (err?.code === 'auth/user-not-found') {
        errorMsg = 'Email not found. Please sign up first.';
      } else if (err?.code === 'auth/wrong-password') {
        errorMsg = 'Incorrect password.';
      } else if (err?.code === 'auth/invalid-email') {
        errorMsg = 'Invalid email address.';
      } else if (err?.code === 'auth/user-disabled') {
        errorMsg = 'This account has been disabled.';
      } else if (err?.code === 'auth/operation-not-allowed') {
        errorMsg =
          'Email/password sign-in is disabled in Firebase Auth. Enable Email/Password sign-in in Firebase console.';
      } else if (err?.code === 'auth/too-many-requests') {
        errorMsg = 'Too many failed login attempts. Please try again later.';
      } else {
        errorMsg = err?.message || errorMsg;
      }

      setError(errorMsg);
      toast.error(errorMsg, { pauseOnHover: false });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return {
    signIn,
    loading,
    error,
  };
}
