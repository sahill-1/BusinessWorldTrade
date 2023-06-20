import React, { useState } from 'react';
import "./Testimonial.css";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handlePrevSlide = () => {
    const prevSlide = activeSlide === 0 ? 2 : activeSlide - 1;
    setActiveSlide(prevSlide);
  };

  const handleNextSlide = () => {
    const nextSlide = activeSlide === 2 ? 0 : activeSlide + 1;
    setActiveSlide(nextSlide);
  };

  return (
    <div style={{ width: "100%"}}>
      <section className="gradient-custom">
        <div className="container my-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white"></i>
              </div>

              <div className="card">
                <div className="card-body px-4 ">

                  <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">

                    <div className="carousel-indicators mb-0" style={{margin:"auto"}}>
                      <button
                      style={{width:"10px", height:"1px", background:"black", margin:"0px 5px",borderRadius:"5px"}}
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="0"
                        className={activeSlide === 0 ? "active" : ""}
                        aria-current={activeSlide === 0 ? "true" : "false"}
                        aria-label="Slide 1"
                        onClick={() => handleSlideChange(0)}
                      ></button>
                      <button 
                        style={{width:"10px", height:"1px", background:"black", margin:"0px 5px", borderRadius:"5px"}}
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="1"
                        className={activeSlide === 1 ? "active" : ""}
                        aria-current={activeSlide === 1 ? "true" : "false"}
                        aria-label="Slide 2"
                        onClick={() => handleSlideChange(1)}
                      ></button>
                      <button
                      style={{width:"10px", height:"1px", background:"black", margin:"0px 5px",borderRadius:"5px"}}
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="2"
                        className={activeSlide === 2 ? "active" : ""}
                        aria-current={activeSlide === 2 ? "true" : "false"}
                        aria-label="Slide 3"
                        onClick={() => handleSlideChange(2)}
                      ></button>
                    </div>

                    <div className="carousel-inner pb-5">
                      <div className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}>
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Maria Smantha - Web Developer</h4>
                                <p className="mb-0 pb-3">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi
                                  blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam
                                  natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id
                                  ipsa ipsum laboriosam perferendis.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}>
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                                <p className="mb-0 pb-3">
                                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                  sit aspernatur.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}>
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">John Smith - Marketing Specialist</h4>
                                <p className="mb-0 pb-3">
                                  At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium
                                  voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                  occaecati cupiditate non provident, similique sunt in culpa qui officia mollitia
                                  animi id laborum et dolorum fuga.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="prev"
                      onClick={handlePrevSlide}
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="next"
                      onClick={handleNextSlide}
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
