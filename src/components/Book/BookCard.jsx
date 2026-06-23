import { CircleFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const {
    id,
    title,
    author,
    description,
    category,
    available_quantity,
    image_url,
    rating,
  } = book;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#edf5ff] shadow transition duration-300 hover:border-[#60a5fa] hover:shadow-lg hover:shadow-[#60a5fa59]">
      <div className="relative h-60 overflow-hidden bg-[#dceeff]">
        <Image
          src={image_url}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-110"
          unoptimized={true} 
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0f3d66cc] via-[#1f5d992a] to-transparent" />

        <Chip
          color="success"
           variant="flat"
          className="absolute left-4 top-4 border border-[#93c5fd] bg-[#eaf4ff] text-[#0f3d66] uppercase tracking-wider"
        >
          <Chip.Label>{category}</Chip.Label>
        </Chip>
         <Chip className="absolute bottom-4 right-4 border border-[#9ac5ee] bg-[#edf5ff] text-[#0f3d66]">
          <CircleFill width={6} />
          <Chip.Label>{available_quantity} in stock</Chip.Label>
        </Chip>
      </div>

       <div className="flex flex-1 flex-col p-4 md:p-5 lg:p-6">
        <div className="mb-4 flex min-h-8 items-center justify-between gap-2 text-sm">
          <p className="min-w-0 truncate text-[#1f5d99]">
            by <span className="font-semibold text-[#0f3d66]">{author}</span>
          </p>
        </div>

       <h3 className="line-clamp-1 text-lg font-extrabold leading-tight text-[#0f3d66]">
          {title}
        </h3>

         <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#1f5d99]">
          {description}
        </p>

        <div className="mt-5">
          <Link
            href={`/all-books/${id}`}
           className="inline-flex h-12 items-center rounded-lg bg-[#1f5d99] px-4 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d]"
          >
            View Book Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;