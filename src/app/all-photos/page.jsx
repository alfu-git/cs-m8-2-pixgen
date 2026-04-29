import ImageCard from "@/components/shared/imageCard/ImageCard";
import { getAllGenerations } from "@/lib/dataFetch";
import React from "react";

const AllPhotosPage = async () => {
  const allGenerations = await getAllGenerations();

  return (
    <section className="my-15">
      <div>
        <h2 className="mb-4 text-3xl font-bold">All Photos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allGenerations.map((generation) => (
          <ImageCard key={generation.id} generation={generation} />
        ))}
      </div>
    </section>
  );
};

export default AllPhotosPage;
