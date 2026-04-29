import ImageCard from "@/components/shared/imageCard/ImageCard";
import { getAllGenerations } from "@/lib/dataFetch";
import React from "react";

const TopGenerations = async () => {
  const allGenerations = await getAllGenerations();
  const topGenerations = allGenerations.slice(0, 8);

  return (
    <section className="my-15">
      <div>
        <h2 className="mb-4 text-3xl font-bold">Top Generations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topGenerations.map((generation) => (
            <ImageCard key={generation.id} generation={generation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGenerations;
