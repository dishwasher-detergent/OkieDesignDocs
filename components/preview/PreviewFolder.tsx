import Image from "next/image";
import React, { useState } from "react";
import Layout from "./Layout";

interface PreviewProps {
  title: string;
  count: number;
  slug: string;
  path: string;
  imageUrl: string;
  displayIcons?: boolean;
}
const customLoader = ({ src }: any) => {
  return src;
};

function PreviewFolder(props: PreviewProps) {
  const { title, slug, count, path, imageUrl, displayIcons = true } = props;
  const [fallbackImage, setFallbackImage] = useState(false);

  return (
    <Layout
      title={title}
      description={`${count} Sub-Item${count > 1 ? "s" : ""}`}
      path={path}
    >
      <>
        {imageUrl && (
          <Image
            loader={customLoader}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            src={`${imageUrl}`}
            alt={`This is a folder of ${count} components`}
            onError={() => {
              setFallbackImage(true);
            }}
          />
        )}
        {displayIcons && (
          <div className="absolute grid w-full grid-cols-4 gap-1 overflow-hidden p-2">
            {[...Array(count)].map((item: string, index: number) => (
              <div
                key={index}
                className="h-16 w-full rounded-md bg-slate-500/30 backdrop-blur-md md:h-10"
              ></div>
            ))}
          </div>
        )}
      </>
    </Layout>
  );
}

export default PreviewFolder;
