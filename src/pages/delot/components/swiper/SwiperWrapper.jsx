import bg from "../../../../public/swipper/BACKGROUND.png";

import { SwiperContainer } from "./Swiper";
import { data } from "./swiper.data";

export const SwiperWrapper = () => {
  console.log(data, "DATA")
  return <SwiperContainer bg={bg} cards={data} />;
};
