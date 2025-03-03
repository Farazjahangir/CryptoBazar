import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import { useSignIn } from "../../hooks/reactQuery/useSignIn";
import { setUser } from "../../redux/userSlice";
import styles from "./style.module.scss";

const Login = () => {
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const signInMut = useSignIn();
  const dispatch = useDispatch();

  const navigateTo = (path) => {
    navigate(path);
  };

  const onLogin = async () => {
    try {
      const user = await signInMut.mutateAsync({
        email: userCreds.email,
        password: userCreds.password,
      });
      console.log("user", user)
      dispatch(setUser(user));
      if (user.role === "admin") {
        navigateTo("/admin/dashboard");
      } else {
        navigateTo("/");
      }
    } catch (e) {
      console.log("Sign in err", e);
    }
    // if (userCreds.email === 'admin') {
    //   navigateTo('/admin/dashboard')
    //   return
    // }
    // navigateTo('/')
  };

  const handleChange = (_, value, key) => {
    const creds = { ...userCreds };
    creds[key] = value;
    setUserCreds(creds);
  };

  return (
    <div className={styles.container}>
      <Box className={styles.box}>
        <h1 className={styles.title}>Sign In</h1>
        <p>
          Don't have account?{" "}
          <span className={styles.link} onClick={() => navigateTo("/signup")}>
            Create an account
          </span>
        </p>
        <div className={styles.inputContainer}>
          <div className="mt20">
            <TextInput
              label="Email"
              inputClass={styles.input}
              type="email"
              value={userCreds.email}
              onChange={(e, value) => handleChange(e, value, "email")}
            />
            <TextInput
              label="Password"
              type="password"
              value={userCreds.password}
              onChange={(e, value) => handleChange(e, value, "password")}
            />
          </div>
          <div className="mt20">
            <Button
              value="Login"
              onClick={onLogin}
              loading={signInMut.isPending}
            />
          </div>
        </div>
        <p className={styles.forgotText}>Forgot Password?</p>
      </Box>
    </div>
  );
};

export default Login;
