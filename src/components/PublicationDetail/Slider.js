import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";
import "swiper/swiper-bundle.min.css";

export function Slider({ images }) {
  return (
    <Box bg={"blackAlpha.300"}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => "console.log(swiper)"}
      >
        {images.map((image) => {
          return (<SwiperSlide key={image.public_id}>
            <Box boxSize="sm">
              <Image
                src={image.imageurl}
                boxSize={["100px", "300px", "400px", "400px", "400px"]}
                objectFit="cover"
                alt="Foto departamento"
              />
            </Box>
          </SwiperSlide>)
        })}
      </Swiper>
    </Box>
  );
}
