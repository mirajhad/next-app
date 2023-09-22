import Link from "next/link";
import React from "react";

async function fetchRepoContents(name: any) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/mirajhad/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = response.json();
  return contents;
}

const RepoDirs = async (name: any) => {
  const contents = await fetchRepoContents(name.name);
  const dirs = contents.filter((content: any) => content.type == "dir");
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name.name}/${dir.path}`}>
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
