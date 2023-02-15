import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  registerFormInputsState,
  registerFormStepState,
} from "../../atom/registerFormInputsState";
import { isEmail } from "@/selectors/registerForm";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
}

const Email = () => {
  const [form, setForm] = useRecoilState(registerFormInputsState);
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);
  const IsEmail = useRecoilValue(isEmail);

  const router = useRouter();

  let handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormStep("stepOne");
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="opacity-60 sm:!inline"
        alt="Netflix Logo"
        style={{ objectFit: "cover" }}
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 h-8 md:h-14"
      />
      <button
        onClick={() => router.push("/login")}
        className="absolute right-4 top-4 cursor-pointer object-contain md:right-10 md:top-6 bg-[#E50914] px-3 py-1 rounded-sm"
      >
        Sing In
      </button>
      <div className="absolute w-full flex flex-col items-center justify-center mt-24  pb-32 flex-1 px-20 text-center  ">
        <h1 className="text-2xl md:text-5xl  font-medium text-white max-w-lg tracking-wide">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-lg md:text-2xl text-white mt-4 mb-8">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-white text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative md:flex mt-4 ">
            <input
              type="email"
              id="email"
              placeholder=" "
              autoFocus
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              value={form.email}
              className={`inline-block text-black text-lg ml-2 md:ml-0 p-2 md:p-4 min-w-[400px] outline-none peer  `}
            />
            <label
              htmlFor="email"
              className="absolute text-[#8c8c8c] duration-300 transform -translate-y-4 scale-75 top-2 md:top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 md:peer-focus:-translate-y-4"
            >
              Email address
            </label>
            <button
              className="flex ml-24 items-center bg-[#e50914] text-white text-xl px-8 md:px-12 md:py-3 py-2 rounded-sm md:rounded-none mt-4 md:mt-0 md:ml-0 "
              disabled={IsEmail ? false : true}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
