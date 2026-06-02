import { useCallback, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebase-app/firebaseConfig';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { userRole, userStatus } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();

export default function useGoogleSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signInWithGoogle = useCallback(async (isSignUp = false) => {
    setLoading(true);
    setError('');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user data exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await (
        await import('firebase/firestore')
      ).getDoc(userDocRef);

      if (!userDoc.exists()) {
        // New user - create profile
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName || 'User',
          photoURL: user.photoURL || '',
          uid: user.uid,
          role: userRole.USER,
          status: userStatus.ACTIVE,
          createdAt: serverTimestamp(),
        });

        toast.success('Account created and signed in!', { pauseOnHover: false });
      } else {
        toast.success('Signed in successfully!', { pauseOnHover: false });
      }

      navigate('/dashboard');
    } catch (err) {
      let errorMsg = err?.message || 'Google sign-in failed';
      if (err?.code === 'auth/operation-not-allowed') {
        errorMsg =
          'Google sign-in is disabled in Firebase Auth. Enable Google provider in Firebase console.';
      }
      setError(errorMsg);
      toast.error(errorMsg, { pauseOnHover: false });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return {
    signInWithGoogle,
    loading,
    error,
  };
}
