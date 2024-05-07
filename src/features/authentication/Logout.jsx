import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
// import { useLogout } from "./useLogout";
// import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  // const { logout, isLoggingOut } = useLogout();
  // function handleLogout() {
  //   logout();
  // }

  return (
    <ButtonIcon>
      {/* {!isLoggingOut ? <HiArrowRightOnRectangle /> : <SpinnerMini />} */}
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
