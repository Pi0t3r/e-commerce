import { useState } from "react";

export const LabelInput = ({
  title,
  forId,
  type,
  placeholder,
  onChange = "",
}) => {
  return (
    <div class="flex flex-col mt-4 tablet:w-[40%] tablet:mb-4 tablet:text-lg">
      <label for={forId} class="text-form">
        {title}
      </label>
      <input
        id={forId}
        class="bg-transparent outline-none text-paragraph"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <hr />
    </div>
  );
};

function SignUp() {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorSecondPassword, setErrorSecondPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 8) {
      setErrorPassword("Invalid Password");
    } else {
      setErrorPassword("");
    }
  };
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setErrorEmail("Invalid email");
    } else {
      setErrorEmail("");
    }
  };
  const checkPassword = () => {
    const passwordFirst = document.querySelector("#password").value;
    const passwordSecond = document.querySelector("#confirmPass").value;
    if (passwordFirst !== passwordSecond) {
      alert("Passwords is different");
      return false;
    } else {
      return true;
    }
  };
  const checkInfo = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const emailInput = document.getElementById("email").value;
    if (name === "" || surname === "" || emailInput === "") {
      alert("complete all information");
      return false;
    } else {
      return true;
    }
  };
  const checkAll = () => {
    const isPasswordValid = checkPassword();
    const isInfoValid = checkInfo();
    if (isPasswordValid && isInfoValid && errorEmail === "") {
      window.location.href = "/";
    } else {
      return;
    }
  };
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center shadow w-screen h-screen">
      <div class="absolute w-full h-full bg-black/70 flex justify-center items-center">
        <div class="w-4/5 h-[90%]">
          <div class="text-center text-white">
            <h4 class="text-Main-text text-2xl font-bold tablet:text-5xl">TimeKeepers</h4>
            <p class="text-Main-text text-xl mt-6 tablet:text-3xl tablet:mt-10 tablet:mb-10">Sign Up</p>
          </div>
          <div class="mt-2">
            <form class="flex flex-col tablet:flex-row tablet:flex-wrap tablet:justify-between">
              <LabelInput
                title="Name"
                forId="name"
                placeholder="name"
                type="text"
                pattern="[a-zA-Z]"
              />
              <LabelInput
                title="Surname"
                forId="surname"
                placeholder="Surname"
                type="text"
              />
              <LabelInput
                title="Email"
                forId="email"
                placeholder="Email"
                type="email"
                onChange={handleChangeEmail}
              />
              {errorEmail && (
                <p class="text-red-600 absolute top-[33%] mt-8 left-1/2 -translate-x-1/2">
                  {errorEmail}
                </p>
              )}
              <LabelInput
                title="Password"
                forId="password"
                placeholder="••••••••"
                type="password"
                onChange={handleChangePassword}
              />
              {errorPassword && (
                <p class="text-red-600 absolute top-[43.5%] left-1/2 -translate-x-1/2">
                  {errorPassword}
                </p>
              )}
              <LabelInput
                title="Confirm Password"
                forId="confirmPass"
                placeholder="••••••••"
                type="password"
              />
              {errorSecondPassword && (
                <p class="text-red-600 left-1/2 -translate-x-1/2 absolute top-[80%]">
                  {errorSecondPassword}
                </p>
              )}
            </form>
          <div class="mt-3">
            <a
              class="bg-form mt-6 rounded-lg text-Main-text p-2 text-center cursor-pointer transition-all hover:bg-red-500 hover:scale-105 tablet:block tablet:w-3/4 tablet:mx-auto tablet:my-20 tablet:py-5 tablet:font-medium tablet:tracking-wider"
              onClick={checkAll}
            >
              Sign up
            </a>
          </div>
            <p class="text-Main-text flex flex-row justify-between tablet:justify-center">
              Have an Account?{" "}
              <a
                href="/login"
                class="text-form cursor-pointer hover:text-red-700 transition-colors tablet:ml-8"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
