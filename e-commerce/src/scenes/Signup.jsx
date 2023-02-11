export const LabelInput = ({
  title,
  forId,
  type,
  placeholder,
  value = "",
  onChange = "",
  className = "",
}) => {
  return (
    <div class="flex flex-col mt-4 ">
      <label for={forId} class="text-form" className={className}>
        {title}
      </label>
      <input
        class="bg-transparent outline-none text-paragraph"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <hr />
    </div>
  );
};

function SignUp() {
  return (
    <div class="bg-BackgroundHeaderImage bg-cover bg-center shadow w-screen h-screen">
      <div class="absolute w-full h-full bg-black/70 flex justify-center items-center">
        <div class="w-4/5 h-[90%]">
          <div class="text-center text-white">
            <h4 class="text-Main-text text-2xl font-bold">Company Name</h4>
            <p class="text-Main-text text-xl mt-6">Sign Up</p>
          </div>
          <div class="mt-2">
            <form class="flex flex-col">
              <LabelInput
                title="Name"
                forId="name"
                placeholder="name"
                type="text"
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
              />
              <LabelInput
                title="Password"
                forId="password"
                placeholder="••••••••"
                type="password"
              />
              <LabelInput
                title="Confirm Password"
                forId="confirmPass"
                placeholder="••••••••"
                type="password"
              />
              <input
                id="submit"
                type="submit"
                value="Sign up"
                class="bg-form mt-6 rounded-lg text-Main-text p-2"
              />
            </form>
          </div>
          <div class="mt-3">
            <p class="text-Main-text flex flex-row justify-between">
              Have an Account?{" "}
              <a href="/login" class="text-form">
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
