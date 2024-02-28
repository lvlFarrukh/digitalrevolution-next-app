import Cover from "@/components/Navbar/Sections/Cover/Cover";
import Ourwork from "@/components/Navbar/Sections/Ourwork/Ourwork";
import Services from "@/components/Navbar/Sections/Services/Services";
import React, { Fragment } from "react";
// register Swiper custom elements
export default function page() {
  return (
    <Fragment>
      <Cover />
      <Services />
      <Ourwork />
    </Fragment>
  );
}
