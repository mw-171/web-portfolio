export default function Portfolio() {
  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto"
      style={{ backgroundImage: "url('/test.jpg')" }}
    >
      <div className="px-48 py-24">
        <p className="font-bold flex justify-start items-center text-5xl text-blue-300">
          Portfolio
        </p>
        {/* TODO: add gallery carousel here of art, click into more specifics. need to develop components for individual display */}
      </div>
    </div>
  );
}
