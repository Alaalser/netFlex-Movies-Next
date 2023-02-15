import Head from "next/head";
import { useRecoilState } from "recoil";
import { registerFormStepState } from "../../atom/registerFormInputsState";
import Image from "next/image";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

const Icon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className=" text-[#e50914]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const StepTow = () => {
  const router = useRouter();

  const { logout } = useAuth();

  return (
    <div className="relative flex flex-col h-screen w-screen bg-white md:items-center md:justify-center ">
      <Head>
        <title>NetFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 h-8 md:h-14"
      />
      <button
        onClick={logout}
        className="absolute text-black text-2xl right-4 top-4 cursor-pointer object-contain md:right-10 md:top-6  px-3 py-1 rounded-sm"
      >
        Sign Out
      </button>
      <div className="absolute top-16 md:top-24 border-b-2 w-full border-[#E6E6E6]" />
      <div className="flex w-full max-w-lg md:mt-56  flex-col items-center mt-36  pb-32 flex-1 px-20 text-center  ">
        <Image
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png"
          className="cursor-pointer object-contain  h-16 "
          width={1000}
          height={1000}
          alt="Devices"
        />
        <p className=" text-[#333333] text-sm mt-10">STEP 1 OF 3</p>
        <h1 className="text-3xl text-black font-bold mt-4">
          Choose your plan.
        </h1>
        <div className="flex items-center text-start space-x-4 ">
          <Icon />
          <p
            className="
            text-[#333333] text-lg mt-4 max-w-[250px]
            "
          >
            No commitments, cancel anytime.
          </p>
        </div>
        <div className="flex items-center text-start space-x-4 ">
          <Icon />
          <p
            className="
            text-[#333333] text-lg mt-4 max-w-[250px]
            "
          >
            Everything on Netflix for one low price.
          </p>
        </div>
        <div className="flex items-center text-start space-x-4 ">
          <Icon />
          <p
            className="
            text-[#333333] text-lg mt-4 max-w-[250px]
            "
          >
            Unlimited viewing on all your devices.
          </p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-[#e50914]  text-white text-lg font-bold mt-10 px-32 py-3 rounded-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTow;
