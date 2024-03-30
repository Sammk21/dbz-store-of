import Image from "next/image"
import localFont from "next/font/local"

const myFont = localFont({
  src: "../../../../fonts/Display/Humane/Humane-Black.ttf",
})

const Hero = () => {
  return (
    <div className="content-container h-full w-full relative text-[#c5191b]">
      <div
        className={` uppercase ${myFont.className} flex justify-center w-full text-[30vw]`}
      >
        <h1 style={{ lineHeight: "normal" }}>dividebyZERO</h1>
      </div>
      <div className="sm:grid grid-cols-5 w-full h-full gap-6   flex flex-col ">
        <div className="col-span-3 relative aspect-[1/1.5] sm:aspect-video ">
          <video
            src="https://mediastorage.livestory.io/armani/posts/v1080p/65ae6eecb9d6c10008f3e4b9.mp4"
            className="object-cover object-center w-full h-full rounded-large absolute top-0"
            autoPlay={true}
            muted
            loop
          />
        </div>
        <div className="col-span-2 relative aspect-square ">
          <Image
            src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-marketing-holi-in-colours/subhome-xmedia-man//w/3360/IMAGE-landscape-default-fill-ac1555d5-e585-45d3-abe9-31e47f5e798d-default_0.jpg?ts=1710412762083"
            alt=""
            fill
            className="object-cover object-center rounded-large"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
