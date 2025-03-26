import { useEffect, useRef, useState } from "react";
import "./musicPlayer.css";

export default function MusicPlayerSystem() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.bensound.com/bensound-music/bensound-dubstep.mp3",
    },
    {
      title: "Track 2",
      source: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    },
    {
      title: "Track 3",
      source: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
    },
    {
      title: "Track 4",
      source: "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3",
    },
  ];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  }

  function handleForwardBackward(direction) {
    setTrackProgress(0); // Reset progress bar

    setCurrentTrack((prevTrack) => {
      let newTrack;
      if (direction === "Forward") {
        newTrack = prevTrack < tracks.length - 1 ? prevTrack + 1 : 0;
      } else {
        newTrack = prevTrack > 0 ? prevTrack - 1 : tracks.length - 1;
      }

      return newTrack;
    });

    setIsPlaying(true); // Ensure the new track plays automatically
  }

  // Play new track automatically when currentTrack changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Reload the new track
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error("Playback error:", error));
      }
    }
  }, [currentTrack]);

  return (
    <div className="main-div">
      <h1># Ab Bajate Raho</h1>
      <h2>Track: {tracks[currentTrack].title}</h2>
      <img
        src="https://play-lh.googleusercontent.com/IkBgEGyYIAaYLzNG8VLOJ_ntUkk-we9ErksMUCmI5kBuCVy6GdjowH9K0nLSvHVYegY=w240-h480-rw"
        alt="Album Art"
        className="image"
      />
      <audio ref={audioRef} src={tracks[currentTrack].source} />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${trackProgress}%` }}></div>
      </div>
      <div className="buttons-div">
        <button className="backward" onClick={() => handleForwardBackward("Backward")}>
          Backward
        </button>
        <button className="play-pause" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="forward" onClick={() => handleForwardBackward("Forward")}>
          Forward
        </button>
      </div>
    </div>
  );
}

// this too can be used

{/* <audio ref={audioRef} controls>
<source src={tracks[currentTrack].source} type="audio/mpeg" />
</audio>  */}