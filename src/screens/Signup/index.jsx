import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import styles from "./style.module.scss";

const Signup = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <Box className={styles.box}>
        <h1 className={styles.title}>Create An Account</h1>
        <p>
          Already have account?{" "}
          <span className={styles.link} onClick={() => navigateTo("/login")}>
            Sign In
          </span>
        </p>
        <div className={styles.inputContainer}>
          <div className="mt20">
            <TextInput
              label="Fullname"
              inputClass={styles.input}
              type="email"
            />
            <TextInput
              label="Contact no"
              inputClass={styles.input}
              type="email"
            />
            <TextInput label="Address" inputClass={styles.input} type="email" />
            <TextInput label="Email" inputClass={styles.input} type="email" />
            <TextInput label="Password" type="password" />
            <TextInput label="Confirm Password" type="password" />
          </div>
          <div className="mt20">
            <Button value="Sign Up" />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Signup;
