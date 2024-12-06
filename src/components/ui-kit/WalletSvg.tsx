import React from "react";
const WalletSvg = () => {
  return (
    // <svg
    //   className="wallet-svg"
    //   width="12"
    //   height="12"
    //   viewBox="0 0 12 12"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clip-path="url(#clip0_1081_3517)">
    //     <path d="M0.75 0H0V0.75H0.75V0Z" className="path-fill" />
    //     <path d="M1.5 0H0.75V0.75H1.5V0Z" className="path-fill" />
    //     <path d="M2.25 0H1.5V0.75H2.25V0Z" className="path-fill" />
    //     <path d="M3 0H2.25V0.75H3V0Z" className="path-fill" />
    //     <path d="M3.75 0H3V0.75H3.75V0Z" className="path-fill" />
    //     <path d="M4.5 0H3.75V0.75H4.5V0Z" className="path-fill" />
    //     <path d="M5.25 0H4.5V0.75H5.25V0Z" className="path-fill" />
    //     <path d="M6 0H5.25V0.75H6V0Z" className="path-fill" />
    //     <path d="M6.75 0H6V0.75H6.75V0Z" className="path-fill" />
    //     <path d="M7.5 0H6.75V0.75H7.5V0Z" className="path-fill" />
    //     <path d="M8.25 0H7.5V0.75H8.25V0Z" className="path-fill" />
    //     <path d="M9 0H8.25V0.75H9V0Z" className="path-fill" />
    //     <path d="M9.75 0H9V0.75H9.75V0Z" className="path-fill" />
    //     <path d="M0.75 0.75H0V1.5H0.75V0.75Z" className="path-fill" />
    //     <path d="M1.5 0.75H0.75V1.5H1.5V0.75Z" className="path-fill" />
    //     <path d="M2.25 0.75H1.5V1.5H2.25V0.75Z" className="path-fill" />
    //     <path d="M3 0.75H2.25V1.5H3V0.75Z" className="path-fill" />
    //     <path d="M3.75 0.75H3V1.5H3.75V0.75Z" className="path-fill" />
    //     <path d="M4.5 0.75H3.75V1.5H4.5V0.75Z" className="path-fill" />
    //     <path d="M5.25 0.75H4.5V1.5H5.25V0.75Z" className="path-fill" />
    //     <path d="M6 0.75H5.25V1.5H6V0.75Z" className="path-fill" />
    //     <path d="M6.75 0.75H6V1.5H6.75V0.75Z" className="path-fill" />
    //     <path d="M7.5 0.75H6.75V1.5H7.5V0.75Z" className="path-fill" />
    //     <path d="M8.25 0.75H7.5V1.5H8.25V0.75Z" className="path-fill" />
    //     <path d="M9 0.75H8.25V1.5H9V0.75Z" className="path-fill" />
    //     <path d="M9.75 0.75H9V1.5H9.75V0.75Z" className="path-fill" />
    //     <path d="M0.75 1.5H0V2.25H0.75V1.5Z" className="path-fill" />
    //     <path d="M1.5 1.5H0.75V2.25H1.5V1.5Z" className="path-fill" />
    //     <path d="M10.5 1.5H9.75V2.25H10.5V1.5Z" className="path-fill" />
    //     <path d="M11.25 1.5H10.5V2.25H11.25V1.5Z" className="path-fill" />
    //     <path d="M0.75 2.25H0V3H0.75V2.25Z" className="path-fill" />
    //     <path d="M1.5 2.25H0.75V3H1.5V2.25Z" className="path-fill" />
    //     <path d="M10.5 2.25H9.75V3H10.5V2.25Z" className="path-fill" />
    //     <path d="M11.25 2.25H10.5V3H11.25V2.25Z" className="path-fill" />
    //     <path d="M0.75 3H0V3.75H0.75V3Z" className="path-fill" />
    //     <path d="M1.5 3H0.75V3.75H1.5V3Z" className="path-fill" />
    //     <path d="M2.25 3H1.5V3.75H2.25V3Z" className="path-fill" />
    //     <path d="M3 3H2.25V3.75H3V3Z" className="path-fill" />
    //     <path d="M3.75 3H3V3.75H3.75V3Z" className="path-fill" />
    //     <path d="M4.5 3H3.75V3.75H4.5V3Z" className="path-fill" />
    //     <path d="M5.25 3H4.5V3.75H5.25V3Z" className="path-fill" />
    //     <path d="M6 3H5.25V3.75H6V3Z" className="path-fill" />
    //     <path d="M6.75 3H6V3.75H6.75V3Z" className="path-fill" />
    //     <path d="M7.5 3H6.75V3.75H7.5V3Z" className="path-fill" />
    //     <path d="M8.25 3H7.5V3.75H8.25V3Z" className="path-fill" />
    //     <path d="M9 3H8.25V3.75H9V3Z" className="path-fill" />
    //     <path d="M9.75 3H9V3.75H9.75V3Z" className="path-fill" />
    //     <path d="M10.5 3H9.75V3.75H10.5V3Z" className="path-fill" />
    //     <path d="M11.25 3H10.5V3.75H11.25V3Z" className="path-fill" />
    //     <path d="M12 3H11.25V3.75H12V3Z" className="path-fill" />
    //     <path d="M0.75 3.75H0V4.5H0.75V3.75Z" className="path-fill" />
    //     <path d="M1.5 3.75H0.75V4.5H1.5V3.75Z" className="path-fill" />
    //     <path d="M2.25 3.75H1.5V4.5H2.25V3.75Z" className="path-fill" />
    //     <path d="M3 3.75H2.25V4.5H3V3.75Z" className="path-fill" />
    //     <path d="M3.75 3.75H3V4.5H3.75V3.75Z" className="path-fill" />
    //     <path d="M4.5 3.75H3.75V4.5H4.5V3.75Z" className="path-fill" />
    //     <path d="M5.25 3.75H4.5V4.5H5.25V3.75Z" className="path-fill" />
    //     <path d="M6 3.75H5.25V4.5H6V3.75Z" className="path-fill" />
    //     <path d="M6.75 3.75H6V4.5H6.75V3.75Z" className="path-fill" />
    //     <path d="M7.5 3.75H6.75V4.5H7.5V3.75Z" className="path-fill" />
    //     <path d="M8.25 3.75H7.5V4.5H8.25V3.75Z" className="path-fill" />
    //     <path d="M9 3.75H8.25V4.5H9V3.75Z" className="path-fill" />
    //     <path d="M9.75 3.75H9V4.5H9.75V3.75Z" className="path-fill" />
    //     <path d="M10.5 3.75H9.75V4.5H10.5V3.75Z" className="path-fill" />
    //     <path d="M11.25 3.75H10.5V4.5H11.25V3.75Z" className="path-fill" />
    //     <path d="M12 3.75H11.25V4.5H12V3.75Z" className="path-fill" />
    //     <path d="M0.75 4.5H0V5.25H0.75V4.5Z" className="path-fill" />
    //     <path d="M1.5 4.5H0.75V5.25H1.5V4.5Z" className="path-fill" />
    //     <path d="M11.25 4.5H10.5V5.25H11.25V4.5Z" className="path-fill" />
    //     <path d="M12 4.5H11.25V5.25H12V4.5Z" className="path-fill" />
    //     <path d="M0.75 5.25H0V6H0.75V5.25Z" className="path-fill" />
    //     <path d="M1.5 5.25H0.75V6H1.5V5.25Z" className="path-fill" />
    //     <path d="M11.25 5.25H10.5V6H11.25V5.25Z" className="path-fill" />
    //     <path d="M12 5.25H11.25V6H12V5.25Z" className="path-fill" />
    //     <path d="M0.75 6H0V6.75H0.75V6Z" className="path-fill" />
    //     <path d="M1.5 6H0.75V6.75H1.5V6Z" className="path-fill" />
    //     <path d="M9.75 6H9V6.75H9.75V6Z" className="path-fill" />
    //     <path d="M10.5 6H9.75V6.75H10.5V6Z" className="path-fill" />
    //     <path d="M11.25 6H10.5V6.75H11.25V6Z" className="path-fill" />
    //     <path d="M12 6H11.25V6.75H12V6Z" className="path-fill" />
    //     <path d="M0.75 6.75H0V7.5H0.75V6.75Z" className="path-fill" />
    //     <path d="M1.5 6.75H0.75V7.5H1.5V6.75Z" className="path-fill" />
    //     <path d="M9.75 6.75H9V7.5H9.75V6.75Z" className="path-fill" />
    //     <path d="M10.5 6.75H9.75V7.5H10.5V6.75Z" className="path-fill" />
    //     <path d="M11.25 6.75H10.5V7.5H11.25V6.75Z" className="path-fill" />
    //     <path d="M12 6.75H11.25V7.5H12V6.75Z" className="path-fill" />
    //     <path d="M0.75 7.5H0V8.25H0.75V7.5Z" className="path-fill" />
    //     <path d="M1.5 7.5H0.75V8.25H1.5V7.5Z" className="path-fill" />
    //     <path d="M9.75 7.5H9V8.25H9.75V7.5Z" className="path-fill" />
    //     <path d="M10.5 7.5H9.75V8.25H10.5V7.5Z" className="path-fill" />
    //     <path d="M11.25 7.5H10.5V8.25H11.25V7.5Z" className="path-fill" />
    //     <path d="M12 7.5H11.25V8.25H12V7.5Z" className="path-fill" />
    //     <path d="M0.75 8.25H0V9H0.75V8.25Z" className="path-fill" />
    //     <path d="M1.5 8.25H0.75V9H1.5V8.25Z" className="path-fill" />
    //     <path d="M11.25 8.25H10.5V9H11.25V8.25Z" className="path-fill" />
    //     <path d="M12 8.25H11.25V9H12V8.25Z" className="path-fill" />
    //     <path d="M0.75 9H0V9.75H0.75V9Z" className="path-fill" />
    //     <path d="M1.5 9H0.75V9.75H1.5V9Z" className="path-fill" />
    //     <path d="M11.25 9H10.5V9.75H11.25V9Z" className="path-fill" />
    //     <path d="M12 9H11.25V9.75H12V9Z" className="path-fill" />
    //     <path d="M0.75 9.75H0V10.5H0.75V9.75Z" className="path-fill" />
    //     <path d="M1.5 9.75H0.75V10.5H1.5V9.75Z" className="path-fill" />
    //     <path d="M11.25 9.75H10.5V10.5H11.25V9.75Z" className="path-fill" />
    //     <path d="M12 9.75H11.25V10.5H12V9.75Z" className="path-fill" />
    //     <path d="M0.75 10.5H0V11.25H0.75V10.5Z" className="path-fill" />
    //     <path d="M1.5 10.5H0.75V11.25H1.5V10.5Z" className="path-fill" />
    //     <path d="M2.25 10.5H1.5V11.25H2.25V10.5Z" className="path-fill" />
    //     <path d="M3 10.5H2.25V11.25H3V10.5Z" className="path-fill" />
    //     <path d="M3.75 10.5H3V11.25H3.75V10.5Z" className="path-fill" />
    //     <path d="M4.5 10.5H3.75V11.25H4.5V10.5Z" className="path-fill" />
    //     <path d="M5.25 10.5H4.5V11.25H5.25V10.5Z" className="path-fill" />
    //     <path d="M6 10.5H5.25V11.25H6V10.5Z" className="path-fill" />
    //     <path d="M6.75 10.5H6V11.25H6.75V10.5Z" className="path-fill" />
    //     <path d="M7.5 10.5H6.75V11.25H7.5V10.5Z" className="path-fill" />
    //     <path d="M8.25 10.5H7.5V11.25H8.25V10.5Z" className="path-fill" />
    //     <path d="M9 10.5H8.25V11.25H9V10.5Z" className="path-fill" />
    //     <path d="M9.75 10.5H9V11.25H9.75V10.5Z" className="path-fill" />
    //     <path d="M10.5 10.5H9.75V11.25H10.5V10.5Z" className="path-fill" />
    //     <path d="M11.25 10.5H10.5V11.25H11.25V10.5Z" className="path-fill" />
    //     <path d="M12 10.5H11.25V11.25H12V10.5Z" className="path-fill" />
    //     <path d="M0.75 11.25H0V12H0.75V11.25Z" className="path-fill" />
    //     <path d="M1.5 11.25H0.75V12H1.5V11.25Z" className="path-fill" />
    //     <path d="M2.25 11.25H1.5V12H2.25V11.25Z" className="path-fill" />
    //     <path d="M3 11.25H2.25V12H3V11.25Z" className="path-fill" />
    //     <path d="M3.75 11.25H3V12H3.75V11.25Z" className="path-fill" />
    //     <path d="M4.5 11.25H3.75V12H4.5V11.25Z" className="path-fill" />
    //     <path d="M5.25 11.25H4.5V12H5.25V11.25Z" className="path-fill" />
    //     <path d="M6 11.25H5.25V12H6V11.25Z" className="path-fill" />
    //     <path d="M6.75 11.25H6V12H6.75V11.25Z" className="path-fill" />
    //     <path d="M7.5 11.25H6.75V12H7.5V11.25Z" className="path-fill" />
    //     <path d="M8.25 11.25H7.5V12H8.25V11.25Z" className="path-fill" />
    //     <path d="M9 11.25H8.25V12H9V11.25Z" className="path-fill" />
    //     <path d="M9.75 11.25H9V12H9.75V11.25Z" className="path-fill" />
    //     <path d="M10.5 11.25H9.75V12H10.5V11.25Z" className="path-fill" />
    //     <path d="M11.25 11.25H10.5V12H11.25V11.25Z" className="path-fill" />
    //     <path d="M12 11.25H11.25V12H12V11.25Z" className="path-fill" />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_1081_3517">
    //       <rect width="12" height="12" fill="white" />
    //     </clipPath>
    //   </defs>
    // </svg>

    <svg
      className="wallet-svg"
      version="1.1"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
    >
      <rect x="0" y="0" width="1" height="1" className="path-fill" />
      <rect x="1" y="0" width="1" height="1" className="path-fill" />
      <rect x="2" y="0" width="1" height="1" className="path-fill" />
      <rect x="3" y="0" width="1" height="1" className="path-fill" />
      <rect x="4" y="0" width="1" height="1" className="path-fill" />
      <rect x="5" y="0" width="1" height="1" className="path-fill" />
      <rect x="6" y="0" width="1" height="1" className="path-fill" />
      <rect x="7" y="0" width="1" height="1" className="path-fill" />
      <rect x="8" y="0" width="1" height="1" className="path-fill" />
      <rect x="9" y="0" width="1" height="1" className="path-fill" />
      <rect x="10" y="0" width="1" height="1" className="path-fill" />
      <rect x="11" y="0" width="1" height="1" className="path-fill" />
      <rect x="12" y="0" width="1" height="1" className="path-fill" />
      <rect x="0" y="1" width="1" height="1" className="path-fill" />
      <rect x="1" y="1" width="1" height="1" className="path-fill" />
      <rect x="2" y="1" width="1" height="1" className="path-fill" />
      <rect x="3" y="1" width="1" height="1" className="path-fill" />
      <rect x="4" y="1" width="1" height="1" className="path-fill" />
      <rect x="5" y="1" width="1" height="1" className="path-fill" />
      <rect x="6" y="1" width="1" height="1" className="path-fill" />
      <rect x="7" y="1" width="1" height="1" className="path-fill" />
      <rect x="8" y="1" width="1" height="1" className="path-fill" />
      <rect x="9" y="1" width="1" height="1" className="path-fill" />
      <rect x="10" y="1" width="1" height="1" className="path-fill" />
      <rect x="11" y="1" width="1" height="1" className="path-fill" />
      <rect x="12" y="1" width="1" height="1" className="path-fill" />
      <rect x="0" y="2" width="1" height="1" className="path-fill" />
      <rect x="1" y="2" width="1" height="1" className="path-fill" />
      <rect x="13" y="2" width="1" height="1" className="path-fill" />
      <rect x="14" y="2" width="1" height="1" className="path-fill" />
      <rect x="0" y="3" width="1" height="1" className="path-fill" />
      <rect x="1" y="3" width="1" height="1" className="path-fill" />
      <rect x="13" y="3" width="1" height="1" className="path-fill" />
      <rect x="14" y="3" width="1" height="1" className="path-fill" />
      <rect x="0" y="4" width="1" height="1" className="path-fill" />
      <rect x="1" y="4" width="1" height="1" className="path-fill" />
      <rect x="2" y="4" width="1" height="1" className="path-fill" />
      <rect x="3" y="4" width="1" height="1" className="path-fill" />
      <rect x="4" y="4" width="1" height="1" className="path-fill" />
      <rect x="5" y="4" width="1" height="1" className="path-fill" />
      <rect x="6" y="4" width="1" height="1" className="path-fill" />
      <rect x="7" y="4" width="1" height="1" className="path-fill" />
      <rect x="8" y="4" width="1" height="1" className="path-fill" />
      <rect x="9" y="4" width="1" height="1" className="path-fill" />
      <rect x="10" y="4" width="1" height="1" className="path-fill" />
      <rect x="11" y="4" width="1" height="1" className="path-fill" />
      <rect x="12" y="4" width="1" height="1" className="path-fill" />
      <rect x="13" y="4" width="1" height="1" className="path-fill" />
      <rect x="14" y="4" width="1" height="1" className="path-fill" />
      <rect x="15" y="4" width="1" height="1" className="path-fill" />
      <rect x="0" y="5" width="1" height="1" className="path-fill" />
      <rect x="1" y="5" width="1" height="1" className="path-fill" />
      <rect x="2" y="5" width="1" height="1" className="path-fill" />
      <rect x="3" y="5" width="1" height="1" className="path-fill" />
      <rect x="4" y="5" width="1" height="1" className="path-fill" />
      <rect x="5" y="5" width="1" height="1" className="path-fill" />
      <rect x="6" y="5" width="1" height="1" className="path-fill" />
      <rect x="7" y="5" width="1" height="1" className="path-fill" />
      <rect x="8" y="5" width="1" height="1" className="path-fill" />
      <rect x="9" y="5" width="1" height="1" className="path-fill" />
      <rect x="10" y="5" width="1" height="1" className="path-fill" />
      <rect x="11" y="5" width="1" height="1" className="path-fill" />
      <rect x="12" y="5" width="1" height="1" className="path-fill" />
      <rect x="13" y="5" width="1" height="1" className="path-fill" />
      <rect x="14" y="5" width="1" height="1" className="path-fill" />
      <rect x="15" y="5" width="1" height="1" className="path-fill" />
      <rect x="0" y="6" width="1" height="1" className="path-fill" />
      <rect x="1" y="6" width="1" height="1" className="path-fill" />
      <rect x="14" y="6" width="1" height="1" className="path-fill" />
      <rect x="15" y="6" width="1" height="1" className="path-fill" />
      <rect x="0" y="7" width="1" height="1" className="path-fill" />
      <rect x="1" y="7" width="1" height="1" className="path-fill" />
      <rect x="14" y="7" width="1" height="1" className="path-fill" />
      <rect x="15" y="7" width="1" height="1" className="path-fill" />
      <rect x="0" y="8" width="1" height="1" className="path-fill" />
      <rect x="1" y="8" width="1" height="1" className="path-fill" />
      <rect x="12" y="8" width="1" height="1" className="path-fill" />
      <rect x="13" y="8" width="1" height="1" className="path-fill" />
      <rect x="14" y="8" width="1" height="1" className="path-fill" />
      <rect x="15" y="8" width="1" height="1" className="path-fill" />
      <rect x="0" y="9" width="1" height="1" className="path-fill" />
      <rect x="1" y="9" width="1" height="1" className="path-fill" />
      <rect x="12" y="9" width="1" height="1" className="path-fill" />
      <rect x="13" y="9" width="1" height="1" className="path-fill" />
      <rect x="14" y="9" width="1" height="1" className="path-fill" />
      <rect x="15" y="9" width="1" height="1" className="path-fill" />
      <rect x="0" y="10" width="1" height="1" className="path-fill" />
      <rect x="1" y="10" width="1" height="1" className="path-fill" />
      <rect x="12" y="10" width="1" height="1" className="path-fill" />
      <rect x="13" y="10" width="1" height="1" className="path-fill" />
      <rect x="14" y="10" width="1" height="1" className="path-fill" />
      <rect x="15" y="10" width="1" height="1" className="path-fill" />
      <rect x="0" y="11" width="1" height="1" className="path-fill" />
      <rect x="1" y="11" width="1" height="1" className="path-fill" />
      <rect x="14" y="11" width="1" height="1" className="path-fill" />
      <rect x="15" y="11" width="1" height="1" className="path-fill" />
      <rect x="0" y="12" width="1" height="1" className="path-fill" />
      <rect x="1" y="12" width="1" height="1" className="path-fill" />
      <rect x="14" y="12" width="1" height="1" className="path-fill" />
      <rect x="15" y="12" width="1" height="1" className="path-fill" />
      <rect x="0" y="13" width="1" height="1" className="path-fill" />
      <rect x="1" y="13" width="1" height="1" className="path-fill" />
      <rect x="14" y="13" width="1" height="1" className="path-fill" />
      <rect x="15" y="13" width="1" height="1" className="path-fill" />
      <rect x="0" y="14" width="1" height="1" className="path-fill" />
      <rect x="1" y="14" width="1" height="1" className="path-fill" />
      <rect x="2" y="14" width="1" height="1" className="path-fill" />
      <rect x="3" y="14" width="1" height="1" className="path-fill" />
      <rect x="4" y="14" width="1" height="1" className="path-fill" />
      <rect x="5" y="14" width="1" height="1" className="path-fill" />
      <rect x="6" y="14" width="1" height="1" className="path-fill" />
      <rect x="7" y="14" width="1" height="1" className="path-fill" />
      <rect x="8" y="14" width="1" height="1" className="path-fill" />
      <rect x="9" y="14" width="1" height="1" className="path-fill" />
      <rect x="10" y="14" width="1" height="1" className="path-fill" />
      <rect x="11" y="14" width="1" height="1" className="path-fill" />
      <rect x="12" y="14" width="1" height="1" className="path-fill" />
      <rect x="13" y="14" width="1" height="1" className="path-fill" />
      <rect x="14" y="14" width="1" height="1" className="path-fill" />
      <rect x="15" y="14" width="1" height="1" className="path-fill" />
      <rect x="0" y="15" width="1" height="1" className="path-fill" />
      <rect x="1" y="15" width="1" height="1" className="path-fill" />
      <rect x="2" y="15" width="1" height="1" className="path-fill" />
      <rect x="3" y="15" width="1" height="1" className="path-fill" />
      <rect x="4" y="15" width="1" height="1" className="path-fill" />
      <rect x="5" y="15" width="1" height="1" className="path-fill" />
      <rect x="6" y="15" width="1" height="1" className="path-fill" />
      <rect x="7" y="15" width="1" height="1" className="path-fill" />
      <rect x="8" y="15" width="1" height="1" className="path-fill" />
      <rect x="9" y="15" width="1" height="1" className="path-fill" />
      <rect x="10" y="15" width="1" height="1" className="path-fill" />
      <rect x="11" y="15" width="1" height="1" className="path-fill" />
      <rect x="12" y="15" width="1" height="1" className="path-fill" />
      <rect x="13" y="15" width="1" height="1" className="path-fill" />
      <rect x="14" y="15" width="1" height="1" className="path-fill" />
      <rect x="15" y="15" width="1" height="1" className="path-fill" />
    </svg>
  );
};
export default WalletSvg;
