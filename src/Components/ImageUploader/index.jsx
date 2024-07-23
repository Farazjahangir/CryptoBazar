import { FileUploader } from "react-drag-drop-files";
import { useDropzone } from "react-dropzone";

import dummy from "../../assets/images/profileDummy.png";
import styles from "./style.module.scss";

const ImageUploader = ({
  onDropFile = () => {},
  file,
  accept,
  onDropRejectedError = () => {},
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file, errors) => onDropFile(file, errors),
    accept: accept || {
      "image/jpg": [".jpg"],
    },
    onDropRejected: (err) => onDropRejectedError(err),
  });
  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={styles.container}
    >
      <input {...getInputProps()} />
      <div
        style={{ backgroundImage: `url(${file || dummy})` }}
        className={styles.img}
      />
    </div>
  );
};

export default ImageUploader;
