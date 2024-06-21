import React from "react";
import Checkbox from "./Checkbox";
import FilterSet from "./FilterSet";
import { fylkerINorge } from "../utils/Geo";

export const FilterSets = () => {
  return (
    <div>
      <FilterSet label={"Frist"}>
        <Checkbox category={"Frist"} label={"Nærmest"} key={0} />
        <Checkbox category={"Frist"} label={"Lengst unna"} key={1} />
        <Checkbox category={"Frist"} label={"Snarest"} key={2} />
      </FilterSet>

      <FilterSet label={"Stilling"}>
        <Checkbox category={"Stilling"} label={"Heltid"} key={0} />
        <Checkbox category={"Stilling"} label={"Deltid"} key={1} />
      </FilterSet>

      <FilterSet label={"Sektor"}>
        <Checkbox category={"Sektor"} label={"Offentlig"} key={0} />
        <Checkbox category={"Sektor"} label={"Privat"} key={1} />
        <Checkbox category={"Sektor"} label={"Ikke oppgitt"} key={2} />
      </FilterSet>

      <FilterSet label={"Fylke"}>
        {fylkerINorge.map((fylke, index) => (
          <Checkbox category={"Fylke"} label={fylke} key={index} />
        ))}
      </FilterSet>
    </div>
  );
};
