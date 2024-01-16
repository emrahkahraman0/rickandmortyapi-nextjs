import characterDetail from "@/libs/characterDetail";

async function CharcatersDetails({ params: { id } }) {
  const characterData = await characterDetail(slug);
  return (
    <>
      <div id="characters_details">
        <div className="container">
          <div className="characters_details">
            <div className="characters_details_image">
              <Image
                src={`https://picsum.photos/1920/600?random=${slug}`}
                width={1920}
                height={600}
                alt="Blog İmage"
              />
            </div>
            {/*characters_details_image*/}
            <div className="characters_details_text">
              <h6>{characterData.name}</h6>
              <h6>{characterData.status}</h6>
              <h6>{characterData.species}</h6>
              <h6>{characterData.gender}</h6>
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
