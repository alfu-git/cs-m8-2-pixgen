import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

const ImageCard = ({ generation }) => {
  console.log(generation);
  const { imageUrl, category, title, likes, downloads } = generation;

  return (
    <div className="p-4 border border-zinc-400 rounded-lg shadow">
      <figure className="mb-5 relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-lg"
        />
      </figure>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium">{title}</h3>

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

        <Button variant="outline" className="mt-2 w-full text-lg">
          View
        </Button>
      </div>
    </div>
  );
};

export default ImageCard;
