import { FC } from "react";
import GalleryCard from "../GalleryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

interface Link {
  href: string;
  label: string;
}

const ExploreGallery: FC = () => {
  return (
    <>
      <div className="bg-white rounded mx-6 mt-10 flex flex-col">
        <h3 className="ml-10 py-4 text-2xl w-1/2 font-bold">
          Dog-Friendly Skateparks
        </h3>
        <div className="border-t-2 pt-4 bg-charcoal">
          <Splide
            options={{
              autoplay: true,
              arrows: false,
             
            }}
          >
             <SplideSlide>
              <GalleryCard name="Judkins" image="test2" slug="judkins-skatepark" />
            </SplideSlide>
            <SplideSlide>
              <GalleryCard name="Jefferson" image="test2" slug="jefferson-skatepark" />
            </SplideSlide>
            <SplideSlide>
              <GalleryCard name="Sammamish" image="test2" slug="sammamish-skatepark"/>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="bg-white rounded mx-6 mt-10 flex flex-col">
        <h3 className="ml-10 py-4 text-2xl w-1/2 font-bold">
          Cool Kid Skateparks
        </h3>
        <div className="border-t-2 pt-4 bg-charcoal">
          <Splide
            options={{
              autoplay: true,
              arrows: false,
            }}
          >
            <SplideSlide>
              <GalleryCard name="Sammamish" image="test2" slug="sammamish-skatepark"/>
            </SplideSlide>
            <SplideSlide>
              <GalleryCard name="Jefferson" image="test2" slug="jefferson-skatepark" />
            </SplideSlide>
            <SplideSlide>
              <GalleryCard name="Judkins" image="test2" slug="judkins-skatepark" />
            </SplideSlide>
          </Splide>
        </div>
      </div>

      {/* <div id="grid-container" className="py-5 mt-3 h-80 overflow-auto bg-charcoal">
        <GalleryCard name="Judkins" image="test2"/>
        <GalleryCard name="Jefferson" image="test2"/>
        <GalleryCard name="Seask8" image="test2"/>
        <GalleryCard name="Marginal Way" image="test2"/>
      </div> */}
    </>
  );
};

export default ExploreGallery;
