import {
  CheckBox,
  InputField,
  TextArea,
  SelectDropdown,
  FileInput,
  RadioBtns,
} from "./modules";

const FormInput = (props) => <InputField {...props} />;
FormInput.TextArea = (props) => <TextArea {...props} />;
FormInput.CheckBox = (props) => <CheckBox {...props} />;
FormInput.DropDown = (props) => <SelectDropdown {...props} />;
FormInput.FileImage = (props) => <FileInput {...props} />;
FormInput.Radio = (props) => <RadioBtns {...props} />;

export default FormInput;
