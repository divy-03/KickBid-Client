import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div className="loadContainer">
      loading
      <Player
        autoplay
        loop
        src="https://lottie.host/089ef550-83c2-4344-affe-3c5a97b5500a/mkBqZnhUaE.json"
        style={{ height: "100px", width: "100px" }}
        className="ball"
      />
    </div>
  );
};

export default Loader;
