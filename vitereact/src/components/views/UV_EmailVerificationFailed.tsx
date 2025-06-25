import React from 'react';
import { Link } from 'react-router-dom';

const UV_EmailVerificationFailed: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Email Verification Failed
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We could not verify your email. The verification link may have expired or is invalid.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Link 
              to="/login" 
              className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Back to sign in
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500">
            Need a new verification link?{' '}
            <button className="font-semibold text-blue-600 hover:text-blue-500">
              Resend verification email
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UV_EmailVerificationFailed;