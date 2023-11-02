import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Carousel } from "./components/Carousel";
import { BottomLayout } from "./components/BottomLayout";
import { LibraryServices } from "./components/LibraryServices";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <BottomLayout />
      <LibraryServices />
    </>
  );
};
