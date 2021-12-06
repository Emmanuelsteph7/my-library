import { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import "./fileImage.scss";

const FileImage = ({ label, name, id, onChange, value }) => {
  const [isFileLoading, setIsFileLoading] = useState(false);
  // const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (value) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(value);
    } else {
      setImagePreview(null);
    }
  }, [value]);

  // const handleFile = (e) => {
  //   const file = e.target.files[0];

  //   if (file && file.type.startsWith("image")) {
  //     setImage(file);
  //   } else {
  //     setImage(null);
  //   }
  // };

  return (
    <>
      <div className="fileImage">
        {label && <div className="fileImage__labe lText">{label}</div>}
        <label className="fileImage__labelDiv" htmlFor={id}>
          <span className="fileImage__placeholder">
            {value?.name ? value.name : label}
          </span>

          <div className="fileImage__iconDiv">
            <FiUpload />
          </div>
        </label>
        <input
          className="fileImage__input"
          type="file"
          // accept="image/*"
          name={name}
          id={id}
          onChange={onChange}
        />
        <div className="fileImage__preview">
          <img src={imagePreview} alt="" />
        </div>
      </div>
    </>
  );
};

export default FileImage;
