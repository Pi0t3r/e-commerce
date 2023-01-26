import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function Forgot() {
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center w-screen h-screen">
      <div class="absolute w-full h-full bg-zinc-900/70">
        <div class="absolute top-1/2 left-1/2 flex flex-col translate-x-[-50%] translate-y-[-50%] w-1/3 h-[40%] items-center shadow-[10px_0px_136px_-15px_rgba(0,0,0,1)]">
          <div class="text-left text-white w-full pt-2 pl-4 hover:text-slate-400 transition-all">
            <a href="/login" class="flex flex-row items-center">
              <KeyboardBackspaceIcon /> <span class="ml-2">Back</span>
            </a>
          </div>
          <div class="text-center text-white my-4 text-3xl">
            <h1>Reset Password</h1>
          </div>
          <div class="text-white px-4 mx-auto">
            <p>
              Enter the email associated with your account and we'll send and
              email with instructions to reset your password.
            </p>
          </div>
          <div class="flex flex-col text-left w-full px-4 text-white mt-6">
            <label for="email">Email address</label>
            <input type="email" name="email" class="rounded-md p-2"/>
            <input
              type="submit"
              value="Send Instructions"
              class="bg-blue-500 mt-10 p-2 rounded-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
