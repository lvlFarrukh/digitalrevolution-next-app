import Cover from "@/components/Navbar/Sections/Cover/Cover";
import Ourwork from "@/components/Navbar/Sections/Ourwork/Ourwork";
import Services from "@/components/Navbar/Sections/Services/Services";
import React, { Fragment } from "react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
export default function page() {
  register();

  return (
    <Fragment>
      <Cover />
      <Services />
      <Ourwork />
    </Fragment>
  );
}
