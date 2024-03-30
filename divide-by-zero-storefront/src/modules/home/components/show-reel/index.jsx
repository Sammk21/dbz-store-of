import React from "react"

const ShowReel = () => {
  return (
    <div className="relative aspect-[1/1.5] sm:aspect-video mx-auto">
      <video
        src="https://mediastorage.livestory.io/armani/posts/v1080p/65ae6eecb9d6c10008f3e4b9.mp4"
        className="object-cover object-center w-full h-full rounded-large absolute top-0"
        autoPlay={true}
        muted
        loop
      />
    </div>
  )
}

export default ShowReel
