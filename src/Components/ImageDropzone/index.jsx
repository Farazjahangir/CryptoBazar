import { useDropzone } from "react-dropzone";

import styles from "./style.module.scss";

const ImageDropzone = ({
  onDropFile = () => {},
  file,
  accept,
  onDropRejectedError = () => {},
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file, errors) => onDropFile(file, errors),
    accept: accept || {
      "image/jpg": [".jpg"],
      "image/png": [".png"],
    },
    onDropRejected: (err) => onDropRejectedError(err),
  });
  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={styles.container}
    >
      <input {...getInputProps()} />
      <p className={styles.text}>Drag n Drop your file or click to upload</p>
    </div>
  );
};
export default ImageDropzone;
