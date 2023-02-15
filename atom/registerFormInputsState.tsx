import { atom } from "recoil";

export const registerFormInputsState = atom({
  key: "registerFormInputsState", // unique ID (with respect to other atoms/selectors)
  default: {
    email: "",
    stepOne: "",
    password: "",
    stepTow: "",
  }, // default value (aka initial value)
});

export const registerFormStepState = atom({
  key: "registerFormStepState",
  default: "email",
});
