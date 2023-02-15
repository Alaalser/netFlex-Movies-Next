import React from "react";
import { useRecoilValue } from "recoil";
import Email from "./Email";
import Password from "./Password";
import { registerFormStepState } from "../../atom/registerFormInputsState";
import StepOne from "./StepOne";
import StepTow from "./StepTow";

function SignUp() {
  const formStep = useRecoilValue(registerFormStepState);

  return (
    <div>
      {formStep === "email" ? (
        <Email />
      ) : formStep === "stepOne" ? (
        <StepOne />
      ) : formStep === "password" ? (
        <Password />
      ) : formStep === "stepTow" ? (
        <StepTow />
      ) : null}
    </div>
  );
}

export default SignUp;
