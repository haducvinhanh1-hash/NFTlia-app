import { useCallback, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase-app/firebaseConfig';
import { toast } from 'react-toastify';

export default function usePasswordReset() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const sendResetEmail = useCallback(async (email) => {
    setLoading(true);
    setError('');
    setResetEmailSent(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      toast.success(
        'Password reset link sent to your email! Check your inbox.',
        { pauseOnHover: false },
      );
    } catch (err) {
      let errorMsg = 'Failed to send reset email';

      if (err?.code === 'auth/user-not-found') {
        errorMsg = 'No account found with this email address.';
      } else if (err?.code === 'auth/operation-not-allowed') {
        errorMsg =
          'Password reset is disabled in Firebase Auth. Enable Email/Password sign-in in Firebase console.';
      } else if (err?.code === 'auth/invalid-email') {
        errorMsg = 'Invalid email address.';
      } else if (err?.code === 'auth/too-many-requests') {
        errorMsg = 'Too many requests. Please try again later.';
      } else {
        errorMsg = err?.message || errorMsg;
      }

      setError(errorMsg);
      toast.error(errorMsg, { pauseOnHover: false });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    sendResetEmail,
    loading,
    error,
    resetEmailSent,
  };
}
