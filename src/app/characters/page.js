import Link from "next/link";
import Image from "next/image";
import characterBox from "@/libs/characterBox";

async function Charcaters() {
  const characters = await characterBox();
  console.log(characters);
  return (
    <>
      <div id="characters">
        <div className="container">
          <div className="characters row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            {characters.length &&
              characters.map((character, index) => (
                <div key={character.id} className="characters_item">
                  <Image
                    src={`https://picsum.photos/500/500?random=${character.id}`}
                    width={500}
                    height={500}
                    alt="Character İmage"
                  />
                  <h6>
                    <Link href={`/characters/${character.id}`}>
                      {character.name}
                    </Link>
                  </h6>
                  <p>{character.status}</p>
                  <p>{character.species}</p>
                  <Link
                    className="read_more"
                    href={`/characters/${character.id}`}
                  >
                    Read More
                  </Link>
                </div>
              ))}
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
