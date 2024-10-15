import rocket from "../assets/rocket.webp";

function ComingSoon() {
  return (
    <div className=" flex flex-col items-center justify-center mt-[10%]">
      <img
        src={rocket}
        className=" h-[90%] animate-bounce w-[26rem] rounded-full shadow-lg"
        alt="coming soon..."
      />
      <h1 className=" mt-10 text-6xl font-robotoslab">Coming Soon...</h1>
    </div>
  );
}

export default ComingSoon;
