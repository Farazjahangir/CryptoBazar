import { useState } from "react";
import { TextField } from "@mui/material";

import Rating from "../../../Components/Rating";
import Button from "../../../Components/Button";
import styles from "./style.module.scss";

const WriteReview = () => {
    const [rating, setRating] = useState(1)

    const onChangeRating = (_ ,rat) => {
        setRating(rat)
    }

  return (
    <div className={styles.container}>
      <p className={styles.text}>Rating</p>
      <Rating value={rating} size="large" onChange={onChangeRating} />
      <div className={styles.textInputBox}>
        <TextField
          id="outlined-basic"
          label="Review (Optional)"
          variant="outlined"
          multiline
          rows={5}
          sx={{ width: "100%" }}
        />
      </div>
      <div className={styles.btnBox}>
        <Button value="Submit" />
      </div>
    </div>
  );
};

export default WriteReview;
