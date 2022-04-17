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

    {/* CATEGORY 1 */}
    
      <div className="bg-white rounded mx-5 mt-10 flex flex-col max-w-3xl md:mx-auto">
        <h3 className="ml-10 py-4 text-2xl w-1/2 font-bold">
          Dog-Friendly Parks
        </h3>

        <div id="mobileGallery" className="border-t-2 pt-4 bg-charcoal md:hidden">
          <Splide
            tag="section"
            options={{
              autoplay: true,
              arrows: false,
              pagination: false,
              padding: '20%'
            }}
          >
             <SplideSlide>
              <GalleryCard name="Judkins" image="test2" slug="judkins-skatepark" />
            </SplideSlide>
            
            <SplideSlide>
              <GalleryCard name="Sammamish" image="test2" slug="sammamish-skatepark"/>
            </SplideSlide>
          </Splide>
        </div>

          {/* DESKTOP VERSION */}
          <div id="desktopGallery" className="border-t-2 pt-4 bg-charcoal hidden md:block">
          <Splide
            tag="section"
            options={{
              autoplay: true,
              arrows: false,
              perPage: 2,
              pagination: false,
            }}
          >
             <SplideSlide>
              <GalleryCard name="Judkins" image="test2" slug="judkins-skatepark" />
            </SplideSlide>
  
            <SplideSlide>
              <GalleryCard name="Sammamish" image="test2" slug="sammamish-skatepark"/>
            </SplideSlide>
          </Splide>
        </div>

      </div>    
    </>
  );
};

export default ExploreGallery;
