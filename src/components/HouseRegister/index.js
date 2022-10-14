import React from "react";
import { FormArea } from "./FormArea";
import { HouseRegisterForm } from "./HouseRegisterForm";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";

export function HouseRegister() {
  const { registerHouse } = sections;

  return (
    <FormArea>
      <SectionHeader section={registerHouse.section} sectionTitle={registerHouse.title} />
      <HouseRegisterForm />
    </FormArea>
  );
}
