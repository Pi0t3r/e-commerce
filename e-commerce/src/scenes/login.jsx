import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "../index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useForm } from "react-hook-form";
import React from "react";

// COMPONENT FOR LOGIN AND EMAIL
const InputDiv = ({ icon, type, placeholder, otherClass = "" }) => {
  return (
    <div class="bg-white my-2 flex flex-row items-center pl-2 rounded-md">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        class={`bg-transparent p-2 w-3/4 outline-none ${otherClass}`}
      />
    </div>
  );
};
const Button = ({ name, color, hover, icon }) => {
  return (
    <button
      class={`w-[47%] ${color} ${hover} p-2 rounded-md transition-all flex flex-row justify-center items-center`}
    >
      {icon} <span class="ml-2">{name}</span>
    </button>
  );
};

// LOGIN COMPONENT THAT RETURNS JSX FOR THE LOGIN FORM
function Login() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  const ErrorMessage = ({ errors }) => {
    return <span className="text-red-500">{errors && errors.message}</span>;
  };

  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center w-screen h-screen">
      <div class="absolute w-full h-full bg-zinc-900/70">
        <div class="absolute top-1/2 left-1/2 flex flex-col translate-x-[-50%] translate-y-[-50%] w-1/3 h-1/2 items-center shadow-[10px_0px_136px_-15px_rgba(0,0,0,1)]">
          <div class="w-[90%] h-[90%] m-auto">
            <div class="text-center my-4">
              <h1 class="text-white text-3xl font-bold">Login Form</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputDiv
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                icon={<PersonIcon />}
                type={"email"}
                placeholder={"Email"}
              />
              <ErrorMessage errors={errors} name="email" as="p" />
              <InputDiv
                icon={<LockIcon />}
                type={"password"}
                placeholder={"Password"}
              />
            </form>
            <div class="text-white my-2">
              {/* Link to forgot password page */}
              <a href="/forgot" class="hover:text-slate-500 transition-all">
                Forgot Passoword?
              </a>
            </div>
            <div>
              {/* login button */}
              <input
                type="submit"
                value="Login"
                class="bg-blue-400 text-white w-full p-2 font-bold tracking-wider rounded-md hover:bg-blue-500 hover:scale-105 transition-all cursor:pointer"
              />
            </div>
            <div>
              <p class="text-white text-center my-4">Or login with</p>
              {/* Login with Facebook and Instagram button */}
              <div class="text-white flex flex-row justify-between">
                <Button
                  name={"Facebook"}
                  color={"bg-blue-500"}
                  hover={"hover:bg-blue-600 hover:scale-110"}
                  icon={<FacebookIcon />}
                />
                <Button
                  name={"Instagram"}
                  color={"bg-red-500"}
                  hover={"hover:bg-red-600 hover:scale-110"}
                  icon={<InstagramIcon />}
                />
              </div>
            </div>
            <div class="mt-6">
              <p class="text-white text-center">
                Don't have account?{" "}
                <span class="text text-blue-500">
                  {/* Link to singup page */}
                  <a href="/Signup" class="hover:text-blue-700 transition-all">
                    Signup Now
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
