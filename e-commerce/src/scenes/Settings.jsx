import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const List = ({ icon, text, href }) => {
  return (
    <li class="w-full leading-[2.7rem] cursor-pointer h-20 tablet:text-2xl tablet:leading-[4rem]">
      <a
        href={href}
        class="w-full flex flex-row justify-between items-center relative z-10 text-paragraph"
      >
        <span class="w-1/5 text-center text-mainColor">{icon}</span>{" "}
        <span class="w-2/3">{text}</span>
        <span class="w-1/3 text-right text-mainColor">
          <ArrowForwardIosIcon />
        </span>
      </a>
      <hr class="mt-2" />
    </li>
  );
};

function Settings() {
  return (
    <div class="bg-ItemHeader2 bg-cover bg-center w-screen h-screen bg-fixed">
      <div class="bg-black/90 absolute inset-0">
        <div class="absolute top-0 text-Main-text p-2 tablet:p-6">
          <a href="/" class="hover:text-neutral-500 transition-colors pt-2">
            <KeyboardBackspaceIcon />
          </a>
        </div>
        <div class="text-paragraph text-center font-medium uppercase mt-20 text-4xl tablet:text-5xl">
          <h3>Settings</h3>
        </div>
        <div class="mx-5 mt-24">
          <ul>
            <p class="uppercase text-paragraph font-medium my-2 tablet:text-2xl">General</p>
            <List
              icon={<PersonOutlinedIcon />}
              text="Account"
              href="/Account"
            />
            <List
              icon={<NotificationsOutlinedIcon />}
              text="Notifications"
              href="/Notifications"
            />
            <List icon={<LogoutOutlinedIcon />} text="Logout" href="/login" />
            <List icon={<DeleteOutlinedIcon />} text="Delete" href="/Account" />
          </ul>
          <ul>
            <p class="uppercase text-paragraph font-medium my-2 tablet:text-2xl">Feedback</p>
            <List
              icon={<ErrorOutlineOutlinedIcon />}
              text="Report a bug"
              href="/Report"
            />
            <List
              icon={<SendOutlinedIcon />}
              text="Send feedback"
              href="/Feedback"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Settings;
