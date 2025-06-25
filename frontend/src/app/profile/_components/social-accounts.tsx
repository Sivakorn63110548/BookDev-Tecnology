import Link from "next/link";
import {
  DribbleIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "./icons";

interface Props {
  facebook?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

export function SocialAccounts({
  facebook,
  github,
  linkedin,
  instagram,
  website,
}: Props) {
  const ACCOUNTS = [
    {
      platform: "Facebook",
      url: facebook,
      Icon: FacebookIcon,
    },
    {
      platform: "X",
      url: "https://x.com/bookdev",
      Icon: XIcon,
    },
    {
      platform: "LinkedIn",
      url: linkedin,
      Icon: LinkedInIcon,
    },
    {
      platform: "Dribble",
      url: website,
      Icon: DribbleIcon,
    },
    {
      platform: "GitHub",
      url: github,
      Icon: GitHubIcon,
    },
  ];

  return (
    <div className="mt-4.5">
      <h4 className="mb-3.5 font-medium text-dark dark:text-white">
        Follow me on
      </h4>
      <div className="flex items-center justify-center gap-3.5">
        {ACCOUNTS.filter(account => account.url).map(({ Icon, platform, url }) => (
          <Link
            key={platform}
            href={url!}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <span className="sr-only">View {platform} Account</span>
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
}