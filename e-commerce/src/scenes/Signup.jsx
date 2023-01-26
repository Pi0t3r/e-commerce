import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const InputDiv = ({ type, placeholder }) => {
  return (
    <div class="bg-white my-4 flex flex-row items-center rounded-md">
      <input
        type={type}
        placeholder={placeholder}
        class="bg-transparent p-2 w-3/4 outline-none"
      />
    </div>
  );
};
const ChooseGender = ({ idName, text }) => {
  return (
    <div>
      <input type="radio" id={idName} />
      <label name={idName} class="text-white ml-2">
        {text}
      </label>
    </div>
  );
};
const Button = ({ text, icon, hover, color }) => {
  return (
    <button
      class={`w-[47%] ${color} ${hover} p-2 rounded-md transition-all flex flex-row justify-center items-center`}
    >
      {icon} <span class="ml-2">{text}</span>
    </button>
  );
};
function SignUp() {
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center shadow w-screen h-screen">
      <div class="absolute w-full h-full bg-zinc-900/70">
        <div class="absolute top-1/2 left-1/2 flex flex-col translate-x-[-50%] translate-y-[-50%] w-2/4 h-3/4 items-center shadow-[10px_0px_136px_-15px_rgba(0,0,0,1)] rounded-md">
          <div class="m-auto w-[90%] h-[90%]">
            <div class="text-center my-4">
              <h1 class="text-white text-3xl font-bold">Sign Up Form</h1>
            </div>
            <form>
              <InputDiv type={"text"} placeholder={"Name"} />
              <InputDiv type={"text"} placeholder={"Surname"} />
              <InputDiv type={"password"} placeholder={"Password"} />
              <InputDiv type={"password"} placeholder={"Confirm Password"} />
              <InputDiv type={"email"} placeholder={"Email"} />
              <fieldset class="text-left flex flex-col">
                <ChooseGender idName={"set-male"} text={"Male"} />
                <ChooseGender idName={"set-female"} text={"Female"} />
                <ChooseGender idName={"set-other"} text={"Other"} />
              </fieldset>
              <div class="my-4">
                <input
                  type="submit"
                  value="Sign Up"
                  class="bg-blue-400 w-full h-10 text-white uppercase tracking-wider font-bold rounded-md hover:bg-blue-500 hover:scale-105 transition-all cursor-pointer"
                />
              </div>
            </form>
            <div class="text-white text-center my-4">
              <p>Or sign up with</p>
            </div>
            <div class="flex flex-row justify-between text-white">
              <Button
                text={"Facebook"}
                color={"bg-blue-500"}
                hover={"hover:bg-blue-600 hover:scale-110"}
                icon={<FacebookIcon />}
              />
              <Button
                text={"Instagram"}
                color={"bg-red-500"}
                hover={"hover:bg-red-600 hover:scale-110"}
                icon={<InstagramIcon />}
              />
            </div>
            <div class="text-white text-center my-6">
              <p>
                Already have an account?{" "}
                <a
                  href="/login"
                  class="text-blue-400 hover:text-blue-500 cursor-pointer transition-all"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
