import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import styles from "./style.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
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
            <TextInput label="Email" inputClass={styles.input} type="email" />
            <TextInput label="Password" type="password" />
          </div>
          <div className="mt20">
            <Button value="Login" />
          </div>
        </div>
        <p className={styles.forgotText}>Forgot Password?</p>
      </Box>
    </div>
  );
};

export default Login;
