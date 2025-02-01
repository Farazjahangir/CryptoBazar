import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import { useCreateUser } from "../../hooks/reactQuery/useCreateUser";
import { useCreateDoc } from "../../hooks/reactQuery/useCreateDoc";
import { setUser } from "../../redux/userSlice";
import styles from "./style.module.scss";

const Signup = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const createUserMut = useCreateUser();
  const createDocMut = useCreateDoc();
  const dispatch = useDispatch()

  const navigateTo = (path) => {
    navigate(path);
  };

  const onChangeText = (text, key) => {
    const updatedValues = { ...userInfo };
    updatedValues[key] = text;
    setUserInfo(updatedValues);
  };

  const onCreateUser = async () => {
    try {
      const authUser = await createUserMut.mutateAsync(userInfo);
      const payload = {
        email: userInfo.email,
        name: userInfo.name,
        address: userInfo.address,
        contact: userInfo.contact,
        role: "user",
        isActive: true
      };
      const user = await createDocMut.mutateAsync({
        payload,
        collectionName: "users",
        docId: authUser.uid,
      });
      dispatch(setUser(user))
      navigateTo("/")
    } catch (e) {
      console.log("E", e);
    }
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
              onChange={(_, text) => onChangeText(text, "name")}
            />
            <TextInput
              label="Contact no"
              inputClass={styles.input}
              onChange={(_, text) => onChangeText(text, "contact")}
            />
            <TextInput
              label="Address"
              inputClass={styles.input}
              onChange={(_, text) => onChangeText(text, "address")}
            />
            <TextInput
              label="Email"
              inputClass={styles.input}
              onChange={(_, text) => onChangeText(text, "email")}
            />
            <TextInput
              label="Password"
              type="password"
              onChange={(_, text) => onChangeText(text, "password")}
            />
            <TextInput
              label="Confirm Password"
              type="password"
              onChange={(_, text) => onChangeText(text, "cPassword")}
            />
          </div>
          <div className="mt20">
            <Button value="Sign Up" onClick={onCreateUser} loading={createUserMut.isPending} />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Signup;
