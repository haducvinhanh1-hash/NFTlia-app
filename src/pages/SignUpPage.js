import React, { useState } from 'react';
import LayoutAuthentication from '../layout/layoutAuthentication';
import { Link, useNavigate } from 'react-router-dom';
import FormGroup from '../components/common/FormGroup';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import IconEyeToggle from '../components/icons/IconEyeToggle';
import Checkbox from '../components/checkbox/Checkbox';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useToggleValue from '../hooks/useToggleValue';
import Button from '../components/button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonGoogle from '../components/button/ButtonGoogle';
import useGoogleSignIn from '../hooks/useGoogleSignIn';
import { auth, db } from '../firebase-app/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { userRole, userStatus } from '../utils/constant';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    )
    .min(8, 'Password must be 8 character '),
});
const SignUpPage = () => {
  const navigate = useNavigate();
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState({});
  const { signInWithGoogle, loading: googleLoading } = useGoogleSignIn();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  const handleSignUp = async (values) => {
    if (!acceptTerm) {
      toast.error('Please accept the Terms of Use and Privacy Policy', {
        pauseOnHover: false,
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const user = userCredential.user;

      // Update user profile
      await updateProfile(user, { displayName: values.name });

      // Create Firestore user document
      await setDoc(doc(db, 'users', user.uid), {
        email: values.email,
        displayName: values.name,
        photoURL: '',
        uid: user.uid,
        role: userRole.USER,
        status: userStatus.ACTIVE,
        createdAt: serverTimestamp(),
      });

      toast.success('Account created successfully!', { pauseOnHover: false });
      navigate('/sign-in');
    } catch (err) {
      let errorMsg = 'Sign-up failed';

      if (err?.code === 'auth/email-already-in-use') {
        errorMsg = 'This email is already registered.';
      } else if (err?.code === 'auth/weak-password') {
        errorMsg = 'Password is too weak. Please use a stronger password.';
      } else if (err?.code === 'auth/invalid-email') {
        errorMsg = 'Invalid email address.';
      } else if (err?.code === 'auth/operation-not-allowed') {
        errorMsg =
          'Email/password sign-up is disabled in Firebase Auth. Enable Email/Password sign-in in Firebase console.';
      } else {
        errorMsg = err?.message || errorMsg;
      }

      toast.error(errorMsg, { pauseOnHover: false });
    }
  };
  return (
    <LayoutAuthentication>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-black1 lg:mb-8 dark:text-white">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button
        className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-[#F0F3F6] rounded-xl text-black2 dark:text-white dark:border-[#35373E]"
        onClick={() => signInWithGoogle(true)}
        disabled={googleLoading}
        type="button"
      >
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span>{googleLoading ? 'Signing up...' : 'Sign up with google'}</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name" className="dark:text-white">
            Full Name *
          </Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email" className="dark:text-white">
            Email *
          </Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" className="dark:text-white">
            Password *
          </Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-black2 dark:text-white bottom-2 relative">
              I agree to the
              <span className="underline text-secondary dark:text-primary">
                {' '}
                Terms of Use
              </span>{' '}
              and have read and understand the
              <span className="underline text-secondary dark:text-primary">
                {' '}
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>
        <Button
          className="w-full bg-primary h-[3.5rem]"
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
