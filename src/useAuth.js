// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useContext, useEffect, useMemo, useState } from 'react';
// import { login, logout } from './utils/firebase';

// const AuthContext = React.createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoadingInitial, setIsLoadingInitial] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const loginHandler = async (email, password) => {
//     setIsLoading(true);
//     try {
//       await login(email, password);
//     } catch (err) {
//       alert(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logoutHandler = async () => {
//     setIsLoading(true);
//     try {
//       await logout();
//     } catch (err) {
//       alert(err);
//     } finally {
//       setIsLoading(falsae);
//     }
//   };

//   useEffect(() => {
//     onAuthStateChanged((auth, user) => {
//       if (user) {
//         setUser({ ...user });
//         // setUser({ ...user, avatar: conversations.find((c) => c.userId === user.uid).image });
//       } else setUser(null);

//       setIsLoadingInitial(false);
//     });
//   }, []);

//   const values = useMemo(
//     () => ({
//       user,
//       isLoading,
//       login: loginHandler,
//       logout: logoutHandler,
//     }),
//     [user, isLoading]
//   );

//   return <AuthContext.Provider value={values}>{!isLoadingInitial && children}</AuthContext.Provider>;
// };

// export const useAuth = useContext(AuthContext);

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, login, logout } from './utils/firebase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = async (email, password) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser({
            ...user,
          });
        } else {
          setUser(null);
        }

        setIsLoadingInitial(false);
      }),

    []
  );

  const values = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={values}>{!isLoadingInitial && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
