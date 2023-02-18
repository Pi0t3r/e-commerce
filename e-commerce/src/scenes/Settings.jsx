import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CircleTop from "../components/CircleTop";

const List = ({ icon, text, href }) => {
  return (
    <li class="w-full leading-[2.7rem] cursor-pointer hover:bg-neutral-300 transition-colors">
      <a
        href={href}
        class="w-full flex flex-row justify-between items-center relative z-10"
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
    <>
      <CircleTop title={"Settings"} href="/"/>
      <div class="mx-5 absolute top-1/4 inset-x-0">
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
