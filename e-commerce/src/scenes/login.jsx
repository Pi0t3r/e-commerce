import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center w-screen h-screen">
      <div class="absolute top-1/2 left-1/2 flex flex-col translate-x-[-50%] translate-y-[-50%] w-1/3 h-1/2 items-center shadow-xl shadow-black ">
        <div class="w-[90%] h-[90%] m-auto">
          <div class="text-center my-4">
            <h1 class="text-white text-3xl font-bold">Login Form</h1>
          </div>
          <div>
            <form>
              <div class="bg-white my-2 flex flex-row items-center">
                <PersonIcon />
                <input
                  type="text"
                  placeholder="Email"
                  class="bg-transparent p-2"
                />
              </div>
              <div class="bg-white flex flex-row items-center">
                <LockIcon />
                <input
                  type="password"
                  placeholder="Password"
                  class="bg-transparent p-2"
                />
              </div>
            </form>
            <div class="text-white my-2">
              <a href="">Forgot Passowrd?</a>
            </div>
            <div>
              <button class="bg-blue-400 text-white w-full p-2 font-bold tracking-wider">
                LOGIN
              </button>
            </div>
            <div>
              <p class="text-white text-center my-4">Or login with</p>
              <div class="text-white flex flex-row justify-between">
                <button class="w-[47%] bg-blue-500 p-2">Facebook</button>
                <button class="w-[47%] bg-red-500 p-2">Instagram</button>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-white text-center">
                Don't have account?{" "}
                <span class="text-blue-500 cursor-pointer">
                  <a href="">Signup Now</a>
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
