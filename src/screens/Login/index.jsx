import { Box } from "@mui/material";

import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import styles from "./style.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <Box className={styles.box}>
        <h1 className={styles.title}>Sign In</h1>
        <p>
          Don't have account?{" "}
          <span className={styles.link}>Create an account</span>
        </p>
        <div className="mt20">
          <TextInput label="Email" inputClass={styles.input} type="email" />
          <TextInput label="Password" type="password" />
        </div>
        <div className="mt20">
          <Button />
        </div>
        <p className={styles.forgotText}>Forgot Password?</p>
      </Box>
    </div>
  );
};

export default Login;
