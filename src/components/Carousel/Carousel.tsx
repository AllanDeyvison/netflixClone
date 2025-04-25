import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

interface Props {
  items: any[]
}

function Carousel({ items }: Props) {
  return (
    <div className="w-full h-[60vh] md:h-[75vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-6 md:left-12 text-white max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.title || item.name}
                </h2>
                <p className="text-sm md:text-base mb-4 line-clamp-3">
                  {item.overview}
                </p>
                <button className="bg-red-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700">
                  Assistir agora
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
