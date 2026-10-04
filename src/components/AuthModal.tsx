import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ArrowRight, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup' | 'trial';
  planName?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signup',
  planName = 'Pro Plan',
}) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'trial'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Sync mode if initialMode changes
  React.useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
    setError('');
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid work or personal email address.');
      return;
    }
    if (mode !== 'signin' && !fullName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }

    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setEmail('');
    setPassword('');
    setFullName('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button
          onClick={handleResetAndClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {mode === 'signin'
                ? 'Welcome back!'
                : mode === 'trial'
                ? `14-Day ${planName} Trial Activated!`
                : 'Welcome to QuickNotes!'}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {mode === 'signin'
                ? `Logged in as ${email}. Your notes are syncing.`
                : `We've prepared your workspace for ${email}. Start capturing thoughts with zero friction.`}
            </p>
            <div className="mt-6">
              <button
                onClick={handleResetAndClose}
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Go to QuickNotes Editor
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs">
                  QN
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  QuickNotes
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {mode === 'signin'
                  ? 'Sign in to your vault'
                  : mode === 'trial'
                  ? `Start your 14-day ${planName} trial`
                  : 'Start thinking with clarity'}
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                {mode === 'signin'
                  ? 'Access your encrypted notes from any device.'
                  : 'No credit card required. Instant markdown sync in under 30 seconds.'}
              </p>
            </div>

            {error && (
              <div className="mb-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-700 border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode !== 'signin' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => alert('Password reset link sent to your email.')}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-70 transition-colors"
              >
                {loading ? (
                  <span>Preparing vault...</span>
                ) : (
                  <>
                    <span>
                      {mode === 'signin'
                        ? 'Sign In'
                        : mode === 'trial'
                        ? 'Start Free 14-Day Trial'
                        : 'Create Free Account'}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <Lock className="h-3.5 w-3.5 text-slate-400" />
              <span>Zero-knowledge client-side encryption verified</span>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-600">
              {mode === 'signin' ? (
                <p>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError('');
                    }}
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign up free
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signin');
                      setError('');
                    }}
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
