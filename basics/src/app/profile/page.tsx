import Script from "next/script";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <Image
        height={100}
        width={100}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUpcpr2Yep3od01GQ-yHuGI-TkyKhoYuR3w&s"
        alt="image"
      />
      {<Script>{`alert("welcome to profile page ")`}</Script>}
      page
    </div>
  );
}

export default page;
