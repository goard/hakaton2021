import { useState, useContext, createContext, useEffect } from "react";
import FirebaseApp from "./FirebaseApp";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    FirebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setReady(true);
      } else {
        setCurrentUser(null);
        setReady(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, ready }}>
      {children}
    </AuthContext.Provider>
  );
};
