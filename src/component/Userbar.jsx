
import React, { useEffect } from "react";
import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const PurpleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: purple[500],
    "&:hover": {
      backgroundColor: alpha(purple[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: purple[500],
  },
}));

const label = { inputProps: { "aria-label": "Darkmode toggle" } };

const Userbar = () => {
  useEffect(() => {
    
    document.body.className = "dark-theme";
  }, []);

  return (
    <div style={{ backgroundColor: "var(--side-clr)" }} className="w-[16vw] fixed left-[84%] h-[100vh]">
      <div className="flex items-center justify-center gap-2 mt-5">
        <h1 style={{ color: "var(--text-s)" }} className="text-normal font-semibold">
          Hi, User!
        </h1>
        <img
          src={process.env.PUBLIC_URL + '/img/user_img.png'}
          alt="User"
          className="w-[40px] h-[40px] rounded-[50px]"
        />
      </div>
      <div className="px-5 flex justify-between items-center pt-5">
     
       
      </div>
    </div>
  );
};

export default Userbar;

