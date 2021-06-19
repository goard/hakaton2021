import { useState, useCallback } from "react";
import FirebaseApp from "../utils/FirebaseApp";

export const useAuthHook = () => {
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (form = null) => {
    setLoading(true);
    try {
      const res = await FirebaseApp.auth().signInWithEmailAndPassword(
        form.email,
        form.password
      );
      return res;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const register = useCallback(async (form = null) => {
    setLoading(true);
    try {
      console.log(form.phone);
      const res = await FirebaseApp.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(async (response) => {
          await FirebaseApp.database()
            .ref(`usersList/${response.user.uid}`)
            .update({ firstName: form.firstName, lastName: form.lastName });
        });
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await FirebaseApp.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const resetPassword = useCallback(async (email) => {
    try {
      let res = "";
      FirebaseApp.auth().useDeviceLanguage();
      await FirebaseApp.auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          res = "Письмо для сброса пароля выслано на вашу почту";
        })
        .catch(function (error) {
          console.log(error);
          res = "Error";
        });
      return res;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { loading, login, register, logout, resetPassword };
};
