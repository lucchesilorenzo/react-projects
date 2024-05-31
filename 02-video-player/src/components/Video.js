export default function Video({ video }) {
  return (
    <div>
      {video && (
        <video
          width="700"
          height="500"
          loop
          controls
          autostart="true"
          autoPlay
          muted
          src={video}
        ></video>
      )}
    </div>
  );
}
