import React, { Fragment } from "react";
import "./faqs.scss";

export default function Faqs() {
  return (
    <Fragment>
      <section className="section-faqs" id="Faq">
        <section className="container-section-faqs container mx-auto flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px] lg:gap-[25px] xl:gap-[30px] py-[30px] sm:py-[35px] md:py-[40px] lg:py-[45px] xl:py-[50px] px-[15px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[75px]">
          <section className="top-bar flex flex-col gap-[30px] text-center">
            <h1 className="section-heading-faqs">Faq</h1>
          </section>

          <section className="cards flex flex-col sm:flex-row flex-wrap justify-center gap-y-[35px] sm:gap-y-[40px] md:gap-y-[45px] lg:gap-y-[50px] gap-x-[35px]">
            <section className="card">
              <section className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </section>
              <section className="title">
                Is there a free trial available?
              </section>
              <section className="description">
                Yes, you can try us for free for 30 days. Our friendly team will
                work with you to get you up and running as soon as possible.
              </section>
            </section>
            <section className="card">
              <section className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </section>
              <section className="title">Can I change my plan later?</section>
              <section className="description">
                Of course. Our pricing scales with your company. Chat to our
                friendly team to find a solution that works for you.
              </section>
            </section>
            <section className="card">
              <section className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </section>
              <section className="title">
                What is your cancellation policy?
              </section>
              <section className="description">
                We understand that things change. You can cancel your plan at
                any time and we’ll refund you the difference already paid.
              </section>
            </section>
            <section className="card">
              <section className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </section>
              <section className="title">
                Can other info be added to an invoice?
              </section>
              <section className="description">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </section>
            </section>
            <section className="card">
              <section className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </section>
              <section className="title">How does billing work?</section>
              <section className="description">
                Plans are per workspace, not per account. You can upgrade one
                workspace, and still have any number of free workspaces.
              </section>
            </section>
            <section className="card">
              <section className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </section>
              <section className="title">
                How do I change my account email?
              </section>
              <section className="description">
                You can change the email address associated with your account by
                going to untitled.com/account from a laptop or desktop.
              </section>
            </section>
          </section>

          <section className="bottom-bar bg-gray-700 py-8 px-7 rounded-2xl flex flex-col gap-[20px] text-center items-center justify-center">
            <span className="text-2xl">Still have questions?</span>
            <p className="text-gray-200">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className="py-3 px-7 w-fit border border-solid border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition">
              Get in touch
            </button>
          </section>
        </section>
      </section>
    </Fragment>
  );
}
