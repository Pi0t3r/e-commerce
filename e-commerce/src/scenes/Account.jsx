import CircleTop from "../components/CircleTop";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Data = ({ icon, type, forID, placeholder }) => {
  return (
    <div class="border-b flex flex-row items-center h-12">
      <label for={forID} class="text-mainColor">
        {icon}
      </label>
      <input
        id={forID}
        type={type}
        placeholder={placeholder}
        class="bg-transparent outline-none ml-6"
      />
    </div>
  );
};

function Account() {
  return (
    <>
      <CircleTop title={"User Name"}></CircleTop>
      <div class="bg-Kitty bg-cover bg-center w-[100px] h-[100px] absolute top-[14%] left-1/2 rounded-full -translate-x-1/2 drop-shadow-[0_9px_18px_rgba(0,0,0,0.8)]" />
      <div class="absolute top-1/3 mx-5 w-5/6">
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
        <button class="bg-mainColor text-Main-text py-4 px-7 w-5/6 mx-auto block mt-4 rounded-3xl font-medium tracking-wide">Edit Profile</button>
      </div>
    </>
  );
}

export default Account;
