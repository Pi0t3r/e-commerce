import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const CircleTop = ({ title }) => {
  return (
    <div class="relative overflow-hidden w-screen h-screen">
      <div class="bg-mainColor w-[491px] h-64 top-0 left-1/2 transform translate-y-[-50%] translate-x-[-50%] rounded-full absolute rounded-[50%]">
        <div class="absolute bottom-[85px] left-[100px] ">
          <a class="text-Main-text text-3xl ">
            <KeyboardBackspaceIcon />
          </a>
        </div>
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
          <p class="text-Main-text text-3xl">{title}</p>
        </div>
      </div>
    </div>
  );
};

const List = ({ icon, text, href }) => {
  return (
    <li class="w-full leading-[2.7rem]">
      <a href={href} class="w-full flex flex-row justify-between items-center">
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
    <>
      <CircleTop title={"Settings"} />
      <div class="mt-[-420px] mx-5">
        <ul>
          <p class="uppercase text-paragraph font-medium my-2">General</p>
          <List icon={<PersonOutlinedIcon />} text="Account" href="/Account" />
          <List
            icon={<NotificationsOutlinedIcon />}
            text="Notifications"
            href="/Notifications"
          />
          <List icon={<LogoutOutlinedIcon />} text="Logout" href="/login" />
          <List icon={<DeleteOutlinedIcon />} text="Delete" href="/Account" />
        </ul>
        <ul>
          <p class="uppercase text-paragraph font-medium my-2">Feedback</p>
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
    </>
  );
}

export default Settings;
