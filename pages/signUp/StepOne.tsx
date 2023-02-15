import Head from "next/head";
import { useRecoilState } from "recoil";
import { registerFormStepState } from "../../atom/registerFormInputsState";
import Image from "next/image";
import { useRouter } from "next/router";

interface Inputs {
  password: string;
}

const StepOne = () => {
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);

  let handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormStep("password");
  };
  const router = useRouter();

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
      <div className="flex w-full max-w-lg md:mt-56  flex-col items-center mt-36  pb-32 flex-1 px-20 text-center  ">
        <Image
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          className="cursor-pointer object-contain  h-16 "
          width={1000}
          height={1000}
          alt="Devices"
        />
        <p className=" text-[#333333] text-sm mt-10">STEP 1 OF 3</p>
        <h1 className="text-3xl text-black font-bold mt-4">
          Finish setting up your account
        </h1>
        <p
          className="
            text-[#333333] text-lg mt-4 max-w-[300px]
        "
        >
          Netflix is personalized for you. Create a password to watch on any
          device at any time.
        </p>
        <form onSubmit={handleSubmit}>
          <button className="bg-[#e50914]  text-white text-lg font-bold mt-10 px-32 py-3 rounded-sm">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
