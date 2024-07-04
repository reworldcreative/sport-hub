import { FC } from "react";
import "./VideosLogInBlock.scss";
import VideoEqualizer from "@/components/UI/VideoEqualizer/VideoEqualizer";
import poster from "@img/posters/video-poster1.jpg";
import poster2 from "@img/posters/video-poster2.jpg";
import poster3 from "@img/posters/video-poster3.jpg";
import poster4 from "@img/posters/video-poster4.jpg";
import poster5 from "@img/posters/video-poster5.jpg";
import poster6 from "@img/posters/video-poster6.jpg";
import poster7 from "@img/posters/video-poster7.jpg";
import poster8 from "@img/posters/video-poster8.jpg";

const VideosLogInBlock: FC = () => {
  return (
    <section className="videos-log-in-block">
      <VideoEqualizer
        source="/video.mp4"
        video_width={207}
        video_height={117}
        bottom="6%"
        right="18%"
        poster={poster}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={210}
        video_height={168}
        bottom="0%"
        left="11.65%"
        poster={poster2}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={198}
        video_height={159}
        bottom="23.9%"
        left="0%"
        poster={poster3}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={353}
        video_height={200}
        bottom="23.9%"
        right="8.7%"
        poster={poster4}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={205}
        video_height={116}
        bottom="52.5%"
        right="0%"
        poster={poster5}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={353}
        video_height={200}
        bottom="52.5%"
        left="7.6%"
        poster={poster6}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={210}
        video_height={119}
        top="4%"
        left="19.4%"
        poster={poster7}
        title="Amet minim mollit non deserunt ullamco"
      />

      <VideoEqualizer
        source="/video.mp4"
        video_width={211}
        video_height={155}
        top="0%"
        right="9.8%"
        poster={poster8}
        title="Amet minim mollit non deserunt ullamco"
      />
    </section>
  );
};

export default VideosLogInBlock;
