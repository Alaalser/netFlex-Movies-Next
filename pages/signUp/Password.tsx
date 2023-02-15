import Head from "next/head";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  registerFormInputsState,
  registerFormStepState,
} from "../../atom/registerFormInputsState";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}
const Password = () => {
  const [form, setForm] = useRecoilState(registerFormInputsState);

  const router = useRouter();
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signUp(data.email, data.password);
  };

  return (
    <div className="relative flex flex-col h-screen w-screen  bg-white md:items-center md:justify-center ">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 h-8 md:h-14"
      />
      <button
        onClick={() => router.push("/login")}
        className="absolute text-black text-2xl right-4 top-4 cursor-pointer object-contain md:right-10 md:top-6  px-3 py-1 rounded-sm"
      >
        Sing In
      </button>
      <div className="absolute top-16 md:top-24 border-b-2 w-full border-[#E6E6E6]" />
      <div className="flex  w-full max-w-md  flex-col md:items-start mt-36 ml-12 h-screen  ">
        <p className=" text-[#333333] text-sm mt-10">STEP 1 OF 3</p>
        <h1 className="text-3xl text-black font-bold mt-4">
          Create a password to start your membership
        </h1>
        <p
          className="
            text-[#333333] text-lg mt-4 
        "
        >
          Just a few more steps you&apos;re and done!
        </p>
        <p
          className="
            text-[#333333] text-lg mt-4 
        "
        >
          We hate paperwork, too.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-lg  flex-col items-center  pb-32 flex-1 px-20 text-center  "
        >
          <div className="relative md:flex mt-4 max-w-lg ">
            <div>
              <input
                type="email"
                id="email"
                placeholder=" "
                {...register("email", { required: "Email is required" })}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                value={form.email}
                className={`inline-block border text-black text-lg ml-2 md:ml-0 py-2 md:py-4 px-4 w-[435px] outline-none peer ${
                  errors.email && "border-b-2 border-[#e50914]"
                } `}
              />
              <label
                htmlFor="email"
                className="absolute text-[#8c8c8c] duration-300 transform -translate-y-4 scale-75 top-2 md:top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 md:peer-focus:-translate-y-4"
              >
                Email
              </label>
              {errors.email && (
                <p className="p-1 px-3 text-start text-[13px] font-light  text-[#e50914]">
                  Please enter a valid email.
                </p>
              )}
            </div>
          </div>
          <div className="relative md:flex mt-4 max-w-lg">
            <div>
              <input
                type="password"
                id="password"
                placeholder=" "
                {...register("password", { required: "Password is required" })}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                value={form.password}
                className={`inline-block border text-black text-lg ml-2 md:ml-0 py-2 md:py-4 px-4 w-[435px] outline-none peer ${
                  errors.password && "border-b-2 border-[#e50914]"
                } `}
              />
              <label
                htmlFor="password"
                className="absolute text-[#8c8c8c] duration-300 transform -translate-y-4 scale-75 top-2 md:top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 md:peer-focus:-translate-y-4"
              >
                Add a password
              </label>
              {errors.password && (
                <p className="p-1 px-3 text-start text-[13px] font-light  text-[#e50914]">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </div>
          </div>
          <button className="bg-[#e50914]  text-white text-lg font-bold mt-10 px-48 py-3 rounded-sm">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
