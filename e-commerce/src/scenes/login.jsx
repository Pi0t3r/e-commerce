import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "../index.css";

// COMPONENT FOR LOGIN AND EMAIL
const InputDiv = ({ icon, type, placeholder }) => {
  return (
    <div class="bg-white my-2 flex flex-row items-center pl-2">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        class="bg-transparent p-2 w-3/4 outline-none"
      />
    </div>
  );
};
const Button = ({ name, color }) => {
  return <button class={`w-[47%] ${color} p-2`}>{name}</button>;
};

// LOGIN COMPONENT THAT RETURNS JSX FOR THE LOGIN FORM
function Login() {
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center shadow w-screen h-screen">
      <div class="absolute w-full h-full bg-zinc-900/70">
        <div class="absolute top-1/2 left-1/2 flex flex-col translate-x-[-50%] translate-y-[-50%] w-1/3 h-1/2 items-center shadow-xl">
          <div class="w-[90%] h-[90%] m-auto">
            <div class="text-center my-4">
              <h1 class="text-white text-3xl font-bold">Login Form</h1>
            </div>
            <form>
              <InputDiv
                icon={<PersonIcon />}
                type={"text"}
                placeholder={"Email"}
              />
              <InputDiv
                icon={<LockIcon />}
                type={"password"}
                placeholder={"Password"}
              />
            </form>
            <div class="text-white my-2">
              {/* Link to forgot password page */}
              <a href="">Forgot Passowrd?</a>
            </div>
            <div>
              {/* login button */}
              <button class="bg-blue-400 text-white w-full p-2 font-bold tracking-wider">
                LOGIN
              </button>
            </div>
            <div>
              <p class="text-white text-center my-4">Or login with</p>
              {/* Login with Facebook and Instagram button */}
              <div class="text-white flex flex-row justify-between">
                <Button name={"Facebook"} color={"bg-blue-500"} />
                <Button name={"Instagram"} color={"bg-red-500"} />
              </div>
            </div>
            <div class="mt-6">
              <p class="text-white text-center">
                Don't have account?{" "}
                <span class="text text-blue-500">
                  {/* Link to singup page */}
                  <a href="/Signup">Signup Now</a>
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
