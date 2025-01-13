import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StartupCardProps {
  post: {
    _createdAt: string;
    views: number;
    author: {
      _id: number;
      name: string;
    };
    id: number;
    description: string;
    image: string;
    title: string;
    category: string;
  };
}

const StartupCard = ({ post }: StartupCardProps) => {
  const { _createdAt, views, author, title, category, id, description, image } =
    post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card-date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/users/${author._id}`}>
            <p className="text-16-medium line-clamp-1">{author.name}</p>
          </Link>
          <Link href={`/startup/${id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/users/${author._id}`}>
          <Image
            src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"
            alt="profile picture"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt={title} className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <button className="startup-card_btn">
          <Link href={`/startup/${id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default StartupCard;
