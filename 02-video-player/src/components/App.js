import { useState } from "react";

import Header from "./Header";
import Menu from "./Menu";
import Video from "./Video";

export default function App() {
  const [video, setVideo] = useState("");

  function handleEditVideo(video) {
    setVideo(video);
  }

  return (
    <div>
      <Header />
      <Menu onEditVideo={handleEditVideo} />
      <Video video={video} />
    </div>
  );
}
