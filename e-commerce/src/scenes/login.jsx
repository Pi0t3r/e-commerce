import "../index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Button = ({ icon, background, title, color }) => {
  return (
    <button
      class={`${background} text-Main-text w-[47%] iPad:w-1/3 iPad:h-14 p-2 rounded-xl my-4 flex flex-row items-center Gfold:w-[49%] justify-center cursor-pointer hover:scale-105 transition-all`}
    >
      {icon} <span class="ml-2">{title}</span>
    </button>
  );
};
const Links = ({ title, color, href, hover }) => {
  return (
    <a
      href={href}
      class={`text-${color} hover:text-${hover} transition-colors cursor-pointer`}
    >
      {title}
    </a>
  );
};
// LOGIN COMPONENT THAT RETURNS JSX FOR THE LOGIN FORM
function Login() {
  const [inputType, setInputType] = useState("password");
  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setErrorEmail("Invalid email");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 8) {
      setErrorPassword("Invalid password");
      return false;
    } else {
      setErrorPassword("");
      return true;
    }
  };
  const CheckForm = () => {
    const email = document.getElementById("emailInput");
    const password = document.getElementById("passwordInput");
    if (
      errorPassword === "Invalid password" ||
      errorEmail === "Invalid email" ||
      email.value === "" ||
      password.value === ""
    ) {
      alert("something wrong");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center w-screen h-screen">
      <div class="absolute w-full h-full bg-black/70 flex justify-center items-center">
        <div class="w-4/5 mt-[-13%] iPad:mt-[-10%]">
          <div class="text-center">
            <h4 class="text-Main-text text-2xl font-bold iPad:text-5xl">
              TimeKeepers
            </h4>
            <p class="text-Main-text text-xl mt-6 iPad:text-3xl ">Sign in</p>
            <p class="text-paragraph mt-4 iPad:text-xl iPad:mt-10">
              Hi there! Nice to see you again.
            </p>
          </div>
          <div class="mt-6">
            <form class="flex flex-col iPad:mt-20">
              <div class="iPad:flex iPad:flex-row iPad:justify-between iPad:items-center">
                <div class="flex flex-col relative">
                  <label for="emailInput" class="text-form">
                    Email
                  </label>
                  <input
                    id="emailInput"
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    class="bg-transparent outline-none text-paragraph iPad:w-56"
                  />
                  {errorEmail && (
                    <p class="text-red-600 absolute bottom-[-50%] left-1/2 -translate-x-1/2">
                      {errorEmail}
                    </p>
                  )}
                  <hr class="iPad:mt-2" />
                </div>
                <div class="relative">
                  <label for="passwordInput" class="text-form mt-6">
                    Password
                  </label>
                  <div class="flex flex-row justify-between relative">
                    <input
                      id="passwordInput"
                      type={inputType}
                      placeholder="•••••••"
                      class="bg-transparent outline-none text-paragraph iPad:w-56"
                      onChange={handleChangePassword}
                    />
                    <VisibilityIcon
                      class="fill-paragraph text-sm cursor-pointer w-8 hover:fill-neutral-500 transition-colors"
                      onClick={toggleInputType}
                    />
                    {errorPassword && (
                      <p class="text-red-600 absolute bottom-[-90%] left-1/2 -translate-x-1/2 iPad:w-36">
                        {errorPassword}
                      </p>
                    )}
                  </div>
                  <hr />
                </div>
              </div>
              <a
                id="buttonSend"
                class="bg-form font-bold text-Main-text mt-10 px-2 py-3 rounded-lg text-center cursor-pointer hover:bg-red-500 transition-all hover:scale-105 iPad:w-1/2 iPad:mx-auto iPad:py-4 iPad:my-16"
                onClick={CheckForm}
              >
                Sign in
              </a>
            </form>
            <div class="mt-4 iPad:mt-[-5%]">
              <p class="text-paragraph text-center iPad:mb-5">
                or use one of your social media
              </p>
              <div class="flex flex-row justify-between">
                <Button
                  title="Facebook"
                  background="bg-facebook"
                  icon={<FacebookIcon />}
                />
                <Button
                  title="Instagram"
                  icon={<InstagramIcon />}
                  background="bg-gradient-to-tr from-[#FFDC80] via-[#FCAF45] via-[#F77737] via-[#F56040] via-[#FD1D1D] via-[#E1306C] via-[#C13584] via-[#833AB4]via-[#5B51D8] to-[#405DE6]"
                />
              </div>
            </div>
            <div class="text-paragraph flex flex-row justify-between iPad:mx-10 iPad:mt-10">
              <Links
                title="Forgot password?"
                color="paragraph"
                href="/forgot"
                hover={"neutral-500"}
              />
              <Links
                title="Sign Up"
                color="form"
                href="/Signup"
                hover={"red-900"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
