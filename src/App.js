import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const ActiveBidsPage = lazy(() => import('./pages/ActiveBidsPage'));
const CreatorPage = lazy(() => import('./pages/CreatorPage'));
const RankingPages = lazy(() => import('./pages/RankingPages'));
const MyCollectionPage = lazy(() => import('./pages/MyCollectionPage'));

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>
            <Route
              path="/explore"
              element={<ExplorePage></ExplorePage>}
            ></Route>
            <Route
              path="/active-bids"
              element={<ActiveBidsPage></ActiveBidsPage>}
            ></Route>
            <Route
              path="/creator"
              element={<CreatorPage></CreatorPage>}
            ></Route>
            <Route
              path="/rankings"
              element={<RankingPages></RankingPages>}
            ></Route>
            <Route
              path="/my-collection"
              element={<MyCollectionPage></MyCollectionPage>}
            ></Route>
            <Route
              path="/sign-in"
              element={<SignInPage></SignInPage>}
            ></Route>
            <Route
              path="/sign-up"
              element={<SignUpPage></SignUpPage>}
            ></Route>
            <Route
              path="/forgot-password"
              element={<ForgotPasswordPage></ForgotPasswordPage>}
            ></Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
};
export default App;
