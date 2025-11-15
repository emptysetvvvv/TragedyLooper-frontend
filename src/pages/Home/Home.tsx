import { useEffect, useState } from "react";

const backgrounds = [
  "/assets/images/background/SteinsGate1.jpg",
  "/assets/images/background/SteinsGate2.jpg",
  "/assets/images/background/SteinsGate3.jpg",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // 每 5 秒切换
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-cover bg-center">
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className={`absolute w-full h-full top-0 left-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          } bg-cover bg-center`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
    </div>
  );
};

export default Home;
