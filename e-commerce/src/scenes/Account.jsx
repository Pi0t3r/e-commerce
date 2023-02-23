import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const Data = ({ icon, type, forID, placeholder }) => {
  return (
    <div class="border-b flex flex-row items-center h-20 tablet:text-2xl">
      <label htmlFor={forID} class="text-mainColor tablet:pl-5">
        {icon}
      </label>
      <input
        id={forID}
        type={type}
        placeholder={placeholder}
        class="bg-transparent outline-none ml-6 text-paragraph"
      />
    </div>
  );
};

function Account() {
  return (
    <div class="bg-ItemHeader6 bg-cover bg-center w-screen h-screen">
      <div class="bg-black/90 absolute inset-0">
        <div class="p-4 tablet:p-6">
          <a
            href="/Settings"
            class="text-white hover:text-neutral-500 transition-colors"
          >
            <KeyboardBackspaceIcon />
          </a>
        </div>
        <div class="text-Main-text uppercase text-center tablet:text-4xl font-medium">
          <p>Account</p>
        </div>
        <div class="bg-Kitty bg-cover bg-center w-[100px] h-[100px] absolute top-[13%] left-1/2 rounded-full -translate-x-1/2 drop-shadow-[0_9px_18px_rgba(0,0,0,0.8)] tablet:w-32 tablet:h-32 tablet:top-[15%]" />
        <div class="absolute top-1/4 mx-5 w-5/6 tablet:top-1/3 tablet:mx-0 tablet:w-full">
          <Data
            icon={<PersonOutlinedIcon />}
            type="text"
            forID="name"
            placeholder="User Name"
          />
          <Data
            icon={<InsertInvitationOutlinedIcon />}
            type="text"
            forID="date"
            placeholder="User Date"
          />
          <Data
            icon={<PhoneIphoneOutlinedIcon />}
            type="number"
            forID="name"
            placeholder="User Phone"
          />
          <Data
            icon={<InstagramIcon />}
            type="text"
            forID="instagram"
            placeholder="Instagram Account"
          />
          <Data
            icon={<MailOutlineOutlinedIcon />}
            type="email"
            forID="mail"
            placeholder="User Mail"
          />
          <Data
            icon={<VisibilityOutlinedIcon />}
            type="password"
            forID="password"
            placeholder="•••••••"
          />
          <button class="bg-mainColor text-Main-text py-4 px-7 w-5/6 mx-auto block mt-10 rounded-3xl font-medium tracking-wide cursor-pointer hover:bg-indigo-500 transition-colors hover:text-white tablet:w-2/3 tablet:py-5 tablet:text-xl tablet:tracking-wider">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
