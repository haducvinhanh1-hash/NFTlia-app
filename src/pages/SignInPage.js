import React from 'react';
import Button from '../components/button/Button';
import FormGroup from '../components/common/FormGroup';
import useToggleValue from '../hooks/useToggleValue';
import LayoutAuthentication from '../layout/layoutAuthentication';
import { Link } from 'react-router-dom';
import ButtonGoogle from '../components/button/ButtonGoogle';
import useGoogleSignIn from '../hooks/useGoogleSignIn';
import useEmailSignIn from '../hooks/useEmailSignIn';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import * as yup from 'yup';
import IconEyeToggle from '../components/icons/IconEyeToggle';
const schema = yup.object({
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
const SignInPage = () => {
  const { signInWithGoogle, loading } = useGoogleSignIn();
  const { signIn, loading: emailLoading } = useEmailSignIn();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  const handleSignIn = async (values) => {
    await signIn(values.email, values.password);
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-[#1b1d21] lg:mb-8 dark:text-white">
        Dont have an account?{' '}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle
        text={loading ? 'Signing in...' : 'Sign in with google'}
        onClick={() => signInWithGoogle(false)}
        disabled={loading}
      ></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email" className="dark:text-white">
            Email *
          </Label>
          <Input
            control={control}
            name="email"
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
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="inline-block text-sm font-medium text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </FormGroup>
        <Button
          className="w-full bg-primary max-h-[56px]"
          type="submit"
          disabled={isSubmitting || emailLoading}
          isLoading={isSubmitting || emailLoading}
        >
          {emailLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
