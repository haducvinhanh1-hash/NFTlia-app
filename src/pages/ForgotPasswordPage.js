import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import LayoutAuthentication from '../layout/layoutAuthentication';
import FormGroup from '../components/common/FormGroup';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import usePasswordReset from '../hooks/usePasswordReset';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPasswordPage = () => {
  const [sentEmail, setSentEmail] = useState('');
  const { sendResetEmail, loading, resetEmailSent } = usePasswordReset();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const handleForgotPassword = async (values) => {
    await sendResetEmail(values.email);
    setSentEmail(values.email);
  };

  return (
    <LayoutAuthentication heading="Reset Password">
      {!resetEmailSent ? (
        <>
          <p className="mb-6 text-xs font-normal text-center lg:text-sm text-gray-600 lg:mb-8 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <form onSubmit={handleSubmit(handleForgotPassword)}>
            <FormGroup>
              <Label htmlFor="email" className="dark:text-white">
                Email Address *
              </Label>
              <Input
                control={control}
                name="email"
                type="email"
                placeholder="example@gmail.com"
                error={errors.email?.message}
              />
            </FormGroup>

            <Button
              className="w-full bg-primary max-h-[56px] mb-4"
              type="submit"
              disabled={isSubmitting || loading}
              isLoading={isSubmitting || loading}
            >
              Send Reset Link
            </Button>
          </form>

          <p className="text-center text-sm">
            Remember your password?{' '}
            <Link to="/sign-in" className="font-medium underline text-primary">
              Sign in
            </Link>
          </p>
        </>
      ) : (
        <>
          <div className="text-center mb-6">
            <p className="text-green-600 dark:text-green-400 text-sm mb-4">
              ✓ Password reset email has been sent!
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              A reset link was sent to <strong>{sentEmail}</strong>.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
              Didn't receive the email? Check your spam folder or resend it.
            </p>
          </div>

          <Button
            className="w-full bg-secondary max-h-[56px] mb-3"
            type="button"
            disabled={!sentEmail || loading}
            onClick={() => sendResetEmail(sentEmail)}
            isLoading={loading}
          >
            Resend Reset Link
          </Button>

          <Link to="/sign-in">
            <Button className="w-full bg-primary max-h-[56px]" type="button">
              Back to Sign In
            </Button>
          </Link>
        </>
      )}
    </LayoutAuthentication>
  );
};

export default ForgotPasswordPage;
