import { useRecoilValue } from "recoil";
import Email from "./Email";
import Password from "./Password";
import { registerFormStepState } from "../../atom/registerFormInputsState";
import StepOne from "./StepOne";
import StepTow from "./StepTow";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const formStep = useRecoilValue(registerFormStepState);

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return user ? null : (
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
