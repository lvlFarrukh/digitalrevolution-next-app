import React from "react";
import './circularslider.scss'
import { Facebook, Google, Instagram, Phone, RecentActors, Twitter, WhatsApp, Yard } from "@mui/icons-material";

export default function CircularSlider() {
  return (
    <div class="container">
      <div class="row">
        {/* <div class="col-md-4 col-sm-5 col-xs-5"> */}
          <div class="g-content">
            <ul class="circle-container">
              <li data-id="0" class="active">
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li data-id="1">
                <a href="#">
                  <Instagram/>
                </a>
              </li>
              <li data-id="2">
                <a href="#">
                  <Twitter/>
                </a>
              </li>
              <li data-id="3">
                <a href="#">
                  <Phone/>
                </a>
              </li>
              <li data-id="4">
                <a href="#">
                  <Twitter/>
                </a>
              </li>
              <li data-id="5">
                <a href="#">
                  <WhatsApp/>
                </a>
              </li>
              <li data-id="6">
                <a href="#">
                  <Yard/>
                </a>
              </li>
              <li data-id="7">
                <a href="#">
                  <RecentActors/>
                </a>
              </li>
              
            </ul>
          </div>
        {/* </div> */}
        <div class="col-md-8 col-sm-7 col-xs-7 ">
          <div class="g-content">
            <ul class="services-container">
              <li class="active">
                <div class="service-item" data-id="0">
                  <div class="header">
                    <h4>Fysiotherapie</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Verloskunde</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Diëtist</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Ergotherapie</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Kraamzorg</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Logopedie</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Podotherapie</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-item" data-id="1">
                  <div class="header">
                    <h4>Psychologie</h4>
                  </div>
                  <div class="body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dignissim facilisis dolor in molestie. Praesent
                      scelerisque ultricies dui quis tincidunt.
                    </p>
                  </div>
                  <div class="footer">
                    <a class="btn btn-primary" href="#">
                      Call US!
                    </a>
                    <a class="btn btn-primary" href="#">
                      More information
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
