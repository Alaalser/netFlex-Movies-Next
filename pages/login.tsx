import Head from "next/head";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    }
  };

  return user ? null : (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        alt="Netflix Logo"
        style={{ objectFit: "cover" }}
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 h-8 md:h-14"
      />
      <div className="absolute w-full mt-24  pb-32 px-6  space-y-8 rounded bg-black/75 md:max-w-md md:mt-0 md:px-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1
            className="
    font-semibold text-4xl text-white  md:pt-16
    "
          >
            Sign In
          </h1>
          <div className="space-y-8 ">
            <div className="relative">
              <input
                type="email"
                id="email"
                className={`inline-block  rounded px-5 pb-2.5 pt-5 w-full text-sm text-white  bg-[#333] dark:bg-gray-700 border-0  outline-none peer ${
                  errors.email && "border-b-2 border-orange-500"
                }`}
                placeholder=" "
                {...register("email", { required: "Email is required" })}
              />
              <label
                htmlFor="email"
                className="absolute  text-[#8c8c8c] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email
              </label>
              {errors.email && (
                <p className="p-1 px-3 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder=" "
                className={`inline-block  rounded px-5 pb-2.5 pt-5 w-full text-sm text-white  bg-[#333] dark:bg-gray-700 border-0  outline-none peer ${
                  errors.email && "border-b-2 border-orange-500"
                }`}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <label
                htmlFor="password"
                className="absolute text-[#8c8c8c] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Password
              </label>
              {errors.password && (
                <p className="p-1 px-3 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </div>
          </div>
          <button
            className="w-full rounded bg-[#E50914] py-3 font-semibold my-4"
            type="submit"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>
        </form>
        <div className="text-[gray]">
          New to Netflix?
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => router.push("/signUp")}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
