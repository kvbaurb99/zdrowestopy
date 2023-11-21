import React from "react";

export default function BrImage() {
  return (
    <aside
      className="h-96 w-full bg-cover bg-fixed bg-no-repeat relative"
      style={{
        backgroundImage: "url(br_image.jpg)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm" />
    </aside>
  );
}
