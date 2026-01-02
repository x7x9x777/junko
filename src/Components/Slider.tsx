import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      origin: "auto",
      perView: 1,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
   created(slider) {
  setLoaded(true);

  const observer = new ResizeObserver(() => {
    slider.update();
  });

  observer.observe(slider.container);

  return () => {
    observer.disconnect();
      };
    },
  });

  // Add window resize listener
  React.useEffect(() => {
    const handleResize = () => {
      instanceRef.current?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [instanceRef]);

  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
  }) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 60" // Changed from 35 to 24 to make it narrower
      >
        {props.left && (
          <path
            d="M30 0 L4 30 L30 60"
            stroke="#00001f"
            strokeWidth="5"
            fill="none"
          />
        )}
        {!props.left && (
          <path
            d="M4 0 L30 30 L4 60"
            stroke="#00001f"
            strokeWidth="5"
            fill="none"
          />
        )}
      </svg>
    );
  }
 

  return (
    <>
      <div>
        <div className="navigation-wrapper ">
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={
              false
              // currentSlide === 0
            }
          />
          {/* Slide 1 */}
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide flex flex-row !gap-2 justify-between">
              <div className="flex flex-col justify-center w-full text-left gap-4">
                <span className="text-md font-medium text-[#1a1288]">
                  Strong
                </span>
                <h3 className="!mb-2">Passwordless Authentication</h3>

                <p className="">
                  Eliminate credential phishing attacks while improving user
                  experience for your workforce and customers
                </p>
                <a
                  href="#"
                  className="inline-flex items-center !text-[#1a1288] font-medium "
                >
                  <span className="hover:!underline">Learn More</span>
                  <span className="ml-1.5  text-[1.5em] ">►</span>
                </a>
              </div>

              <div className="flex flex-col justify-center  flex-shrink-0 w-full md:w-auto">
                <img
                  src="/hero_carousel_img_1.png"
                  className="w-full max-w-[250px] md:max-w-[350px] rounded-3xl"
                />
              </div>
            </div>
            {/* Slide 2 */}
            <div className="keen-slider__slide min-w-full flex flex-row !gap-2 justify-between h-[450px]">
              <div className="flex flex-col justify-center w-full text-left gap-4">
                <div>
                  <span className="text-md font-medium text-[#1a1288]">
                    Comprehensive
                  </span>
                  <h3 className="!mb-2">Identity Verification</h3>
                </div>
                <p className="pr-4">
                  Stop modern identity fraud ranging from account onboarding and
                  recovery to interview fraud and remote work
                </p>
                <a
                  href="#"
                  className="inline-flex items-center !text-[#1a1288] font-medium "
                >
                  <span className="hover:!underline">Learn More</span>
                  <span className="ml-1.5 text-[1.5em]">►</span>
                </a>
              </div>
              <div className="flex flex-col justify-center  flex-shrink-0 w-full md:w-auto">
                <img
                  src="/hero_carousel_img_2.png"
                  alt="Fiserv"
                  className="w-full max-w-[250px] md:max-w-[350px] rounded-3xl"
                />
              </div>
            </div>
            {/* Slide 3 */}
            <div className="keen-slider__slide min-w-full flex flex-row !gap-2 justify-between h-[450px]">
              <div className="flex flex-col justify-center w-full text-left gap-4">
                <div>
                  <span className="text-md font-medium text-[#1a1288]">
                    Continuous
                  </span>
                  <h3 className="!mb-2">Risk & Policy Orchestration</h3>
                </div>
                <p className="">
                  Improve compliance with regulations and internal controls
                  while providing fewer clicks and less user pain
                </p>
                <a
                  href="#"
                  className="inline-flex items-center !text-[#1a1288] font-medium "
                >
                  <span className="hover:!underline">Learn More</span>
                  <span className="ml-1.5  text-[1.5em] ">►</span>
                </a>
              </div>
              <div className="flex flex-col justify-center  flex-shrink-0 w-full md:w-auto">
                <img
                  src="hero_carousel_img_3.png"
                  alt="Fiserv"
                  className="w-full max-w-[250px] md:max-w-[350px] rounded-3xl"
                />
              </div>
            </div>
          </div>
          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={false}
          />
        </div>

        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
