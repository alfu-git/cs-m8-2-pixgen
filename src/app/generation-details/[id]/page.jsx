import { getAllGenerations } from "@/lib/dataFetch";
import { Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

const GenerationDetails = async ({ params }) => {
  const { id } = await params;

  const allGenerations = await getAllGenerations();

  const expectedGeneration = allGenerations.find(
    (generation) => generation.id === Number(id),
  );

  const { imageUrl, category, resolution, title, likes, downloads, prompt } =
    expectedGeneration;

  return (
    <section className="my-10">
      <div>
        <div className="p-4 border border-zinc-400 rounded-lg shadow">
          <figure className="mb-1 relative w-full aspect-square">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-lg"
            />

            <Chip className="absolute right-4 top-4 px-4 py-1 text-xl">
              {category}
            </Chip>
          </figure>

          <p className="mb-5 text-zinc-400 text-right">{resolution}</p>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold">{title}</h3>

            <div className="flex gap-10 items-center text-lg font-semibold">
              <span className="flex gap-2 items-center">
                <FaHeart size={20} />
                <span>{likes}</span>
              </span>

              <Separator orientation="vertical" />

              <span className="flex gap-2 items-center">
                <LiaDownloadSolid size={24} />
                <span>{downloads}</span>
              </span>
            </div>

            <p className="flex gap-1">
              <span className="font-semibold">Prompt:</span>
              <span>{prompt}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationDetails;
