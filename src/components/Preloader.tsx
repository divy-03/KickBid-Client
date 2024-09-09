import { Player } from "@lottiefiles/react-lottie-player";

const Preloader = ({ progress }: { progress: number }) => {
  return (
    <div className="preLoadContainer">
      <div>
        <pre>Loading</pre>
        <pre>{progress}</pre>
        <Player
          autoplay
          loop
          src="https://lottie.host/089ef550-83c2-4344-affe-3c5a97b5500a/mkBqZnhUaE.json"
          style={{ height: "100px", width: "100px" }}
          className="ball"
        />
      </div>
    </div>
  );
};

export default Preloader;
