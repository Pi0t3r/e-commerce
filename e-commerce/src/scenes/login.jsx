import "../index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { LabelInput } from "./Signup";

const Button = ({ icon, background, title }) => {
  return (
    <button
      class={`${background} text-Main-text w-[47%] p-2 rounded-md my-4 flex flex-row items-center `}
    >
      {icon} <span class="ml-2">{title}</span>
    </button>
  );
};
const Links = ({ title, color, href }) => {
  return (
    <a href={href} class={`text-${color}`}>
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
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError("Niepoprawny email");
    } else {
      setError("");
    }
  };

  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center w-screen h-screen">
      <div class="absolute w-full h-full bg-black/70 flex justify-center items-center">
        <div class="w-4/5 mt-[-13%]">
          <div class="text-center">
            <h4 class="text-Main-text text-2xl font-bold">Company name</h4>
            <p class="text-Main-text text-xl mt-6">Sign in</p>
            <p class="text-paragraph mt-4">Hi there! Nice to see you again.</p>
          </div>
          <div class="mt-6">
            <form class="flex flex-col">
              <LabelInput
                title="Email"
                forId="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleChange}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <label for="password" class="text-form mt-6">
                Password
              </label>
              <div class="flex flex-row justify-between">
                <input
                  id="password"
                  type={inputType}
                  placeholder="•••••••"
                  class="bg-transparent outline-none text-paragraph"
                />
                <VisibilityIcon
                  class="fill-paragraph text-sm w-8"
                  onClick={toggleInputType}
                />
              </div>
              <hr />
              <button class="bg-form font-bold text-Main-text mt-6 px-2 py-3 rounded-lg text-center">
                <a href="/">Sign in</a>
              </button>
            </form>
            <div class="mt-4">
              <p class="text-paragraph text-center">
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
            <div class="text-paragraph flex flex-row justify-between">
              <Links
                title="Forgot password?"
                color="paragraph"
                href="/forgot"
              />
              <Links title="Sign Up" color="form" href="/Signup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
