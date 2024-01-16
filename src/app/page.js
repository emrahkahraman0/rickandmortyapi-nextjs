import Link from "next/link";

function Home() {
  return (
    <>
      <div className="page">
        <h6>
          <Link href="/characters">Characters</Link> linkine tıklyarak
          ulaşabilirsiniz :)
        </h6>
      </div>
    </>
  );
}

export default Home;
