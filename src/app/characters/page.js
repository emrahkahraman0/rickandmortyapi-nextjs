import Link from "next/link";
import Image from "next/image";
import characterBox from "@/libs/characterBox";

async function Charcaters() {
  const characters = await characterBox();
  return (
    <>
      <div id="characters">
        <div className="container">
          <div className="characters row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            {characters.results.map((character) => {
              return (
                <>
                  <div key={character.id} className="characters_item">
                    <Image
                      className="img_fluid"
                      src={character.image}
                      width={300}
                      height={300}
                      alt="Character İmage"
                    />
                    <h6>
                      <Link href={`/characters/${character.id}`}>
                        {character.name}
                      </Link>
                    </h6>
                    <p>{character.status}</p>
                    <Link
                      className="read_more"
                      href={`/characters/${character.id}`}
                    >
                      Read More
                    </Link>
                  </div>
                  {/*characters_item*/}
                </>
              );
            })}
          </div>
          {/*characters*/}
        </div>
        {/*container*/}
      </div>
      {/*characters#*/}
    </>
  );
}

export default Charcaters;
