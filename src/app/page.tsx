export default function Home() {
  return (
    <>
      <div className="w-full aspect-[4/1] bg-hero-banner bg-cover flex flex-col md:flex-row items-center justify-around text-white">
        <div className="drop-shadow-2xl">
          <h1 className="text-6xl">De KiesKubus</h1>
          <h2 className="text-2xl">Omdat jouw stem niet in een hokje past</h2>
        </div>
        <article className="bg-white px-12 py-4 text-black rounded-2xl">
          <h3>
            Test jouw politieke voorkeur!
          </h3>
          <p>
            blablablabla
          </p>
        </article>
      </div>
    </>
  );
}