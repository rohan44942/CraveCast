import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaShare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import CommentSection from "./CommentSection";
import "./FoodVideoScroll.css"; // Import the CSS file for styles

const FoodVideoScroll = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // State to manage like status

  const fetchVideos = () => {
    const newVideos = [
      {
        id: 1,
        src: "/vid1.mp4",
        title: "Delicious Pasta",
        description:
          "A delightful Italian pasta dish made with fresh ingredients.",
        location: "Italian Bistro",
      },
      {
        id: 2,
        src: "/vid2.mp4",
        title: "Tasty Sushi",
        description: "Authentic sushi prepared by skilled chefs.",
        location: "Sushi House",
      },
      {
        id: 3,
        src: "/vid3.mp4",
        title: "Yummy Pizza",
        description: "Wood-fired pizza with fresh toppings.",
        location: "Pizza Corner",
      },
    ];
    setTimeout(() => {
      setVideos(newVideos);
    }, 1500);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const togglePlayPause = (videoRef) => {
    if (videoRef.paused) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
  };

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsLiked(false);
  };

  const handlePreviousVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
    setIsLiked(false);
  };

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div
  className="flex flex-col items-center py-5 bg-gray-100 overflow-hidden h-screen"
  style={{
    backgroundImage: "url('/path/to/your/background-image.jpg')",
    backgroundSize: "cover",
  }}
>
  <div className="relative w-full max-w-xs flex-grow overflow-hidden pt-16">
    {videos.length > 0 && (
      <div className="relative w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
        <video
          src={videos[currentIndex].src}
          className="w-full h-full object-cover"
          muted={false}
          loop
          autoPlay
          playsInline
          onClick={(e) => togglePlayPause(e.target)}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        
        {/* Video description with red transparent background */}
        <div className="absolute bottom-0 h-1/4 w-full pb-9 z-10 text-white p-3 " style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="text-lg font-semibold">{videos[currentIndex].title}</div>
          <div className="text-sm pb-5 pr-10">{videos[currentIndex].description}</div>
          <a className="text-blue-500"
            href="https://www.google.com/maps/place/Mess+IIIT+Kota/@25.0506638,75.8274458,16.6z/data=!4m20!1m13!4m12!1m4!2m2!1d75.8270338!2d25.0481081!4e1!1m6!1m2!1s0x396f876020de3d93:0x5df67cf5a909b7f2!2siiit+kota+restaurant!2m2!1d75.8286593!2d25.0513428!3m5!1s0x396f876020de3d93:0x5df67cf5a909b7f2!8m2!3d25.0513428!4d75.8286593!16s%2Fg%2F11vcg61rmz?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
            onClick={() =>
              alert(`going to Location: ${videos[currentIndex].location}`)
            }
          >
            {videos[currentIndex].location}
          </a>
        </div>
        
        <div className="absolute bottom-5 left-5 text-blue-400 text-sm z-10 cursor-pointer">
          
        </div>

        <div className="absolute bottom-5 right-5 flex flex-col items-center space-y-3 text-white z-10">
          <button
            className={`text-${isLiked ? "red-600" : "pink-500"} hover:text-pink-300 transition-colors duration-300`}
            onClick={handleLike}
          >
            <FaHeart
              size={35}
              className={`transition-transform duration-300 ${isLiked ? "animate-heart" : ""}`}
            />
          </button>
          <CommentSection />
          <button className="text-gray-300 hover:text-gray-400">
            <FaShare size={35} />
          </button>
        </div>

        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white"
          onClick={handlePreviousVideo}
        >
          <FaChevronLeft size={35} />
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white"
          onClick={handleNextVideo}
        >
          <FaChevronRight size={35} />
        </button>
      </div>
    )}
  </div>
</div>
  )
};

export default FoodVideoScroll;
