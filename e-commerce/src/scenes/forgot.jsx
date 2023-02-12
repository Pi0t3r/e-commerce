import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyIcon from "@mui/icons-material/Key";
import { LabelInput } from "./Signup";
import { useState } from "react";
function Forgot() {
  const [emai, setEmail] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center w-screen h-screen">
      <div class="absolute w-full h-full bg-black/70">
        <div class="w-5/6 h-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="bg-white w-16 h-16 rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 flex items-center justify-center text-mainColor">
            <KeyIcon sx={{ fontSize: 30, rotate: "45deg" }} />
          </div>
          <div class="flex flex-col justify-center text-center mt-14">
            <h3 class="text-Main-text font-medium text-3xl">
              Forgot password?
            </h3>
            <p class="text-paragraph text-xs font-medium mt-3">
              No worries, we'll send you reset instructions
            </p>
          </div>
          <div>
            <LabelInput
              title="Email"
              forId="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChangeEmail}
            />
            {error && (
              <p class="text-red-600 absolute left-1/2 -translate-x-1/2 top-[43.5%]">
                {error}
              </p>
            )}
            <input
              type="submit"
              value="Reset password"
              class="w-full bg-form mt-6 text-Main-text py-3 rounded-xl font-medium tracking-wide"
            />
          </div>
          <div class="text-Main-text mt-7">
            <a href="/Login" class="flex items-center justify-center">
              <KeyboardBackspaceIcon />
              <span class="ml-3 font-medium">Back to log in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
