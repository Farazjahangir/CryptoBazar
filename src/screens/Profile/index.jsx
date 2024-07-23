import { useState } from "react";
import { Grid, Container } from "@mui/material";

import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import ImageUploader from "../../Components/ImageUploader";
import styles from "./style.module.scss";

const Profile = () => {
  const [file, setFile] = useState(null);

  const onDropFile = (file) => {
    const image = URL.createObjectURL(file[0]);
    setFile(image);
  };

  const onDropRejectedError = (err) => {
    console.log("ERR", err);
  };

  return (
    <Container className={styles.container}>
      <Grid container justifyContent="center" alignItems={"center"}>
        <Grid
          item
          md={5}
          xs={12}
          justifyContent="center"
          flex={1}
          display="flex"
          marginTop={2}
          marginBottom={2}
        >
          <ImageUploader
            onDropFile={onDropFile}
            file={file}
            onDropRejectedError={onDropRejectedError}
          />
        </Grid>
        <Grid md={7} xs={12}>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <TextInput label="First Name" />
            </div>
            <div className={styles.inputBox}>
              <TextInput label="Last Name" />
            </div>
          </div>
          <div className={styles.inputBox}>
            <TextInput label="Address" />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <TextInput label="City" />
            </div>
            <div className={styles.inputBox}>
              <TextInput label="Postal Code" />
            </div>
          </div>
          <div className={styles.inputBox}>
            <TextInput label="Contact Number" />
          </div>
          <div className={styles.btnBox}>
            <Button value="Submit" containerClass={styles.buttonContainer} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
