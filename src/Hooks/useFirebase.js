import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userLogin = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsibscribed = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsibscribed;
  }, [auth]);

  return {
    user,
    logOut,
    userLogin,
    loading,
    error,
  };
};

export default useFirebase;
