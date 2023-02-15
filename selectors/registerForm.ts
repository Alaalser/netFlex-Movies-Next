import { selector } from "recoil";
import { registerFormInputsState } from "@/atom/registerFormInputsState";

// email regex validation
const emailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

export const isEmail = selector({
  key: "email", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const form = get(registerFormInputsState);
    const email = form.email.match(emailRegex) ? true : false;
    return email;
  },
});
