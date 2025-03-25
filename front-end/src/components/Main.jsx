import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/*Item list de artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="artist"
        />
      ) : (
        <></>
      )}

      {/*Item list de musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Musicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
