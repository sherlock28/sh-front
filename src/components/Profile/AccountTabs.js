import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { SectionHeader } from "components/commons/SectionHeader";
import { ProfileForm } from "./ProfileForm";
import { PublicationsList } from "./PublicationsList";
import { Tags } from "components/Tags";
import { Questions } from 'components/Questions';
import { sections } from "config/sections";

const PAGE = "profile";

export function AccountTabs() {
  
  const { profile, tags, questions } = sections;

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList>
          <Tab>Mi cuenta</Tab>
          <Tab>Publicaciones</Tab>
          <Tab>Intereses</Tab>
          <Tab>Preguntas</Tab>
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
          <TabPanel>
            <SectionHeader
              section={tags.section}
              sectionTitle={tags.title}
            />
            <Tags fromPage={PAGE} />
          </TabPanel>
          <TabPanel>
            <SectionHeader
              section={questions.section}
              sectionTitle={questions.title}
            />
            <Questions fromPage={PAGE} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
