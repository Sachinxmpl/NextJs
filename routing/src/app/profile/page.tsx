import Script from "next/script";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      {<Script>{`alert("welcome to profile page ")`}</Script>}
      page
    </div>
  );
}
export default page;
