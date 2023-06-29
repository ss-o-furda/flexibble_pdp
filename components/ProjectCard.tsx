import { blurPlaceholder } from "@/constants/blurPlaceholder";
import Image from "next/image";
import Link from "next/link";

type Props = {
  key: string;
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

const ProjectCard = ({
  avatarUrl,
  id,
  image,
  key,
  name,
  title,
  userId,
}: Props) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          width={414}
          height={314}
          alt="project image"
          className="w-full h-full object-cover rounded-2xl"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{title}</p>
        </div>
      </Link>
      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              width={24}
              height={24}
              className="rounded-full"
              alt="profile image"
              priority
            />
            <p>{name}</p>
          </div>
        </Link>
        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image
              src="/heart.svg"
              width={13}
              height={12}
              alt="like count image"
              priority
            />
            <p className="text-sm">{Math.floor(Math.random() * 10000)}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image
              src="/eye.svg"
              width={13}
              height={12}
              alt="views count image"
              priority
            />
            <p className="text-sm">
              {String(
                (Math.floor(Math.random() * 10000) / 1000).toFixed(1) + "k"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
