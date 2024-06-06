import { Box } from "@mui/material";

import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import styles from "./style.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <Box className={styles.box}>
        <h2 className={styles.title}>Sign In</h2>
        <p>
          Don't have account?{" "}
          <span className={styles.link}>Create an account</span>
        </p>
        <TextInput label="Email" inputClass={styles.input}  type="email" />
        <TextInput label="Password" type="password" />
        <div className="mt10">
          <Button />
        </div>
      </Box>
    </div>
  );
};

export default Login;
