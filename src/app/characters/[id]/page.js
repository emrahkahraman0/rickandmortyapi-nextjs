import characterDetail from "@/libs/characterDetail";
import Image from "next/image";

async function CharcatersDetails({ params: { id } }) {
  const characterData = await characterDetail(id);
  return (
    <>
      <div id="characters_details">
        <div className="container">
          <div className="characters_details align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="characters_details_image">
              <Image
                className="img_fluid"
                src={characterData.image}
                width={600}
                height={600}
                alt="Blog İmage"
              />
            </div>
            {/*characters_details_image*/}
            <div className="characters_details_text">
              <h6>{characterData.name}</h6>
              <p>{characterData.status}</p>
              <p>{characterData.species}</p>
              <p>{characterData.gender}</p>
            </div>
            {/*characters_details_text*/}
          </div>
        </div>
        {/*container*/}
      </div>
      {/*characters_details#*/}
    </>
  );
}

export default CharcatersDetails;
