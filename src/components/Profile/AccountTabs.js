import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { SectionHeader } from "components/commons/SectionHeader";
import { ProfileForm } from "./ProfileForm";
import { PublicationsList } from "./PublicationsList";
import { sections } from "config/sections";

export function AccountTabs() {
  const { profile } = sections;

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList>
          <Tab>Mi cuenta</Tab>
          <Tab>Publicaciones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SectionHeader
              section={profile.section}
              sectionTitle={profile.titleAccount}
            />
            <ProfileForm />
          </TabPanel>
          <TabPanel>
            <SectionHeader
              section={profile.section}
              sectionTitle={profile.titlePublications}
            />
            <PublicationsList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
