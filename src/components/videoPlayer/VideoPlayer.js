import ReactPlayer from "react-player";
import {
  AiFillHeart,
  AiOutlineForward,
  AiOutlineBackward,
} from "react-icons/ai";
import { GiPauseButton } from "react-icons/gi";
import { BsMic, BsMicMute } from "react-icons/bs";
import { FaCommentAlt, FaTimes, FaPlay } from "react-icons/fa";
import { MdShare } from "react-icons/md";

import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import "./videoPlayer.scss";
import { useEffect, useRef, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import screenfull from "screenfull";

const format = (sec) => {
  if (isNaN(sec)) {
    return "00:00";
  }

  const date = new Date(sec * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");

  if (hours) {
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return `${minutes} : ${seconds}`;
};

const VideoPlayer = ({ url }) => {
  const playerRef = useRef(null);
  const videoPlayerRef = useRef(null);
  const [state, setState] = useState({
    playing: false,
    muted: true,
    volume: 0.5,
    played: 0,
    seeking: false,
  });

  const handle = useFullScreenHandle();

  useEffect(() => {
    if (state.volume === 0) {
      setState((prev) => ({
        ...prev,
        muted: true,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        muted: false,
      }));
    }
  }, [state.volume]);

  const handlePlayPause = () => {
    setState((prev) => ({
      ...prev,
      playing: !prev.playing,
    }));
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleVolume = (e) => {
    setState((prev) => ({
      ...prev,
      volume: e.target.value / 100,
    }));
  };

  const handleProgress = (changeState) => {
    if (!state.seeking) {
      setState({
        ...state,
        ...changeState,
      });
    }
  };

  const handleSeek = (e) => {
    setState({
      ...state,
      played: e.target.value / 100,
    });
  };

  const handleMouseDown = () => {
    setState({ ...state, seeking: true });
  };

  const handleMouseUp = (e) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(e.target.value / 100);
  };

  console.log(state);
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime = format(currentTime);
  const totalTime = format(duration);

  return (
    <>
      <FullScreen handle={handle} className="videoPlayer" ref={videoPlayerRef}>
        <ReactPlayer
          url={url}
          playing={state.playing}
          width="100%"
          height="100%"
          muted={state.muted}
          ref={playerRef}
          volume={state.volume}
          onProgress={handleProgress}
        />
        <div className="videoPlayer__control">
          <div className="videoPlayer__icon">
            <FaTimes />
          </div>
          <div className="videoPlayer__bottom">
            <div className="videoPlayer__videoDetails">
              <div className="videoPlayer__slider">
                <span className="videoPlayer__currentTime">{elapsedTime}</span>
                <div className="videoPlayer__sliderCont">
                  <input
                    type="range"
                    value={state.played * 100}
                    min={0}
                    onChange={handleSeek}
                    max={100}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    className="videoPlayer__sliderInput"
                  />
                  <div
                    className="videoPlayer__elapsed"
                    style={{ width: `${state.played * 100}%` }}
                  ></div>
                </div>
                <span className="videoPlayer__totalTime">{totalTime}</span>
              </div>
              <div className="videoPlayer__toggleBtns">
                <AiOutlineBackward onClick={handleRewind} />
                {state.playing ? (
                  <GiPauseButton onClick={handlePlayPause} />
                ) : (
                  <FaPlay onClick={handlePlayPause} />
                )}
                <AiOutlineForward onClick={handleForward} />
              </div>
            </div>
            <div className="videoPlayer__controlDiv">
              <div className="videoPlayer__controlsSocial">
                <div className="videoPlayer__controlsItem">
                  <AiFillHeart />
                  <span className="videoPlayer__controlsCount">609</span>
                </div>
                <div className="videoPlayer__controlsItem">
                  <FaCommentAlt />
                  <span className="videoPlayer__controlsCount">120</span>
                </div>
                <div className="videoPlayer__controlsItem">
                  <MdShare />
                </div>
              </div>
              <div className="videoPlayer__controlsToggle">
                <div
                  className="videoPlayer__controlsItem"
                  onClick={(e) =>
                    setState((prev) => ({
                      ...prev,
                      muted: !prev.muted,
                    }))
                  }
                >
                  {state.muted ? <BsMic /> : <BsMicMute />}
                </div>
                <div className="videoPlayer__volumeSlider">
                  <input
                    type="range"
                    value={state.volume * 100}
                    className="videoPlayer__sliderInput"
                    min={0}
                    max={100}
                    onChange={handleVolume}
                  />
                </div>
                {handle.active ? (
                  <div
                    onClick={handle.exit}
                    className="videoPlayer__controlsItem"
                  >
                    <BiExitFullscreen />
                  </div>
                ) : (
                  <div
                    onClick={handle.enter}
                    className="videoPlayer__controlsItem"
                  >
                    <BiFullscreen />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </FullScreen>
    </>
  );
};

export default VideoPlayer;
