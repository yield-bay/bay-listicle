import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

type AnchorObject = {
  title: string;
  link: string;
};

type LinkProps = {
  title: string;
  link: string;
};

export default function Footer() {
  const ecosystem: AnchorObject[] = [
    {
      title: "Home",
      link: "https://www.yieldbay.io/",
    },
    {
      title: "App",
      link: "https://app.yieldbay.io/",
    },
    {
      title: "Farms List",
      link: "https://list.yieldbay.io/",
    },
  ];

  const community: AnchorObject[] = [
    {
      title: "Twitter",
      link: "https://twitter.com/yield_bay",
    },
    {
      title: "Discord",
      link: "https://discord.gg/AKHuvbz7q4",
    },
    {
      title: "Docs",
      link: "https://docs.yieldbay.io/",
    },
  ];

  return (
    <footer
      className="border-t dark:border-neutral-800 dark:bg-neutral-800 dark:bg-opacity-60"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-3 xl:col-span-1">
            <button className="inline-flex items-center cursor-pointer space-x-2">
              <Image
                src="/yieldbay-logo-shine.png"
                alt="YieldBay"
                width={36}
                height={36}
              />
              <h1 className="text-2xl font-bold">YieldBay</h1>
            </button>
            <div className="text-neutral-500 dark:text-neutral-100 text-base">
              <p>Yield Farming hub for all dotsama farms.</p>
              <p className="mt-1">
                Discover yield farms, deposit liquidity and earn rewards in the
                interoperable, multi-chain paraverse of Polkadot and Kusama.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/yield_bay"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yield_bay"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 dark:hover:text-neutral-200"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-12 xl:mt-0">
              <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-300 tracking-wider uppercase">
                Ecosystem
              </h3>
              <ul role="list" className="mt-4 space-y-4 text-base">
                {ecosystem.map((ele, index) => (
                  <List key={index} title={ele.title} link={ele.link} />
                ))}
              </ul>
            </div>
            <div className="mt-12 xl:mt-0">
              <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-300 tracking-wider uppercase">
                Community
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {community.map((ele, index) => (
                  <List key={index} title={ele.title} link={ele.link} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <p className="text-base text-neutral-400 dark:text-neutral-200 xl:text-center">
            For futher inquiry or issues contact:{" "}
            <a
              className="text-primary-500 dark:text-primary-400 hover:text-primary-400 dark:hover:text-primary-300 underline"
              href="mailto:contact@yieldbay.io"
              target="_target"
            >
              contact@yieldbay.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const List = ({ title, link }: LinkProps): any => {
  return (
    <li>
      <a
        href={link}
        className="inline-flex text-neutral-500 dark:text-white font-medium hover:text-neutral-900 dark:hover:text-neutral-300"
      >
        {title}
        <ExternalLinkIcon className="w-4 ml-1" />
      </a>
    </li>
  );
};
