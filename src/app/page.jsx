import React, { Fragment } from "react";
import Cover from "@/components/Sections/Cover/Cover";
import Services from "@/components/Sections/Services/Services";
import Ourwork from "@/components/Sections/Ourwork/Ourwork";
import Clients from "@/components/Sections/Client/Clients";
import Footer from "@/components/Footer/Footer";
// register Swiper custom elements
export default function page() {
  return (
    <Fragment>
      <Cover />
      <Services />
      <Ourwork/>
      <Clients />
      <Footer/>
    </Fragment>
  );
}
