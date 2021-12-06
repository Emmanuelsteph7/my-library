import {
  CheckBox,
  InputField,
  TextArea,
  SelectDropdown,
  FileInput,
} from "./modules";

const FormInput = (props) => <InputField {...props} />;
FormInput.TextArea = (props) => <TextArea {...props} />;
FormInput.CheckBox = (props) => <CheckBox {...props} />;
FormInput.DropDown = (props) => <SelectDropdown {...props} />;
FormInput.FileImage = (props) => <FileInput {...props} />;

export default FormInput;
