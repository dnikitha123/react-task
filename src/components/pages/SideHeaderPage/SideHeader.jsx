// import React from "react";
// import cls from "./SideHeader.module.css";
// import DashboardLogo from "../../../assets/images/DashboardLogo.svg";
// import NoteLogo from "../../../assets/images/NoteLogo.svg";
// import QuestionLogo from "../../../assets/images/QuestionLogo.svg";
// import StatusLogo from "../../../assets/images/StatusLogo.svg";

// const SideHeader = () => {
//   return (
//     <div className={cls.main}>
//       <div className={cls.content}>
//         <div className={cls.dashboardGrp}>
//           <img
//             src={DashboardLogo}
//             alt="DashboardLogo"
//             className={cls.dashboardLogo}
//           />
//           <div className={cls.dashboardText}>Dashboard</div>
//         </div>

//         <div className={cls.asmntGrp}>
//           <img src={NoteLogo} alt="NoteLogo" className={cls.asmntLogo} />
//           <div className={cls.asmntText}>Assessment</div>
//         </div>

//         <div className={cls.libraryGrp}>
//           <img
//             src={QuestionLogo}
//             alt="QuestionLogo"
//             className={cls.questionLogo}
//           />
//           <div className={cls.libraryText}>My Library</div>
//         </div>

//         <div className={cls.adminGrp}>
//           <button className={cls.adminBtn}>Admin</button>
//         </div>

//         <div className={cls.statusGrp}>
//           <img src={StatusLogo} alt="StatusLogo" className={cls.statusLogo} />
//           <div className={cls.roundStText}>Round Status</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideHeader;

import React, { useState, useEffect } from "react";
import cls from "./SideHeader.module.css";
import DashboardLogo from "../../../assets/images/DashboardLogo.svg";
import NoteLogo from "../../../assets/images/NoteLogo.svg";
import QuestionLogo from "../../../assets/images/QuestionLogo.svg";
import StatusLogo from "../../../assets/images/StatusLogo.svg";

const SideHeader = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbar((prevState) => !prevState);
  };

  return (
    <div className={cls.main}>
      {isMobile && ( // Show the button only on mobile devices (max-width: 767px)
        <button className={cls.mobileNavbarButton} onClick={toggleNavbar}>
          Menu 
        </button>
      )}

      <div className={cls.navbarItems + (showNavbar ? "  " + cls.show : "")}>
        <div className={cls.content}>
          <div className={cls.dashboardGrp}>
            <img
              src={DashboardLogo}
              alt="DashboardLogo"
              className={cls.dashboardLogo}
            />
            <div className={cls.dashboardText}>Dashboard</div>
          </div>

          <div className={cls.asmntGrp}>
            <img src={NoteLogo} alt="NoteLogo" className={cls.asmntLogo} />
            <div className={cls.asmntText}>Assessment</div>
          </div>

          <div className={cls.libraryGrp}>
            <img
              src={QuestionLogo}
              alt="QuestionLogo"
              className={cls.questionLogo}
            />
            <div className={cls.libraryText}>My Library</div>
          </div>

          <div className={cls.adminGrp}>
            <button className={cls.adminBtn}>Admin</button>
          </div>

          <div className={cls.statusGrp}>
            <img src={StatusLogo} alt="StatusLogo" className={cls.statusLogo} />
            <div className={cls.roundStText}>Round Status</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideHeader;

