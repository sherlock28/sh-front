import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SectionHeader } from "components/commons/SectionHeader";
import { ProfileForm } from "./ProfileForm";
import { ProfileFormOwner } from "./ProfileFormOwner";
import { PublicationsList } from "./PublicationsList";
import { Tags } from "components/Tags";
import { Questions } from 'components/Questions';
import { sections } from "config/sections";
import { authSelector } from "store/slices/authSlice";
import { USER_CATEGORIES } from "const";

const PAGE = "profile";

export function AccountTabs() {
  
  const { profile, tags, questions } = sections;

  const { user_category } = useSelector(authSelector);

  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList>
          <Tab>Mi cuenta</Tab>
          {
            user_category === USER_CATEGORIES.OWNER ?
              <Tab>Publicaciones</Tab>
              : <></>
          }
          {
            user_category === USER_CATEGORIES.STUDENT ?
              <Tab>Intereses</Tab>
              : <></>
          }
          {
            user_category === USER_CATEGORIES.STUDENT ?
              <Tab>Preguntas</Tab>
              : <></>
          }
        </TabList>
        <TabPanels>
          <TabPanel>
            <SectionHeader
              section={profile.section}
              sectionTitle={profile.titleAccount}
            />
            {
              user_category === USER_CATEGORIES.STUDENT ?
                <ProfileForm />
                : <ProfileFormOwner />
            }
          </TabPanel>

          {
            user_category === USER_CATEGORIES.OWNER ?
              <TabPanel>
                <SectionHeader
                  section={profile.section}
                  sectionTitle={profile.titlePublications}
                />
                <PublicationsList />
              </TabPanel>
              : null
          }
          {
            user_category === USER_CATEGORIES.STUDENT ?
              <TabPanel>
                <SectionHeader
                  section={tags.section}
                  sectionTitle={tags.title}
                />
                <Tags fromPage={PAGE} />
              </TabPanel>
              : <></>
          }
          {
            user_category === USER_CATEGORIES.STUDENT ?
              <TabPanel>
                <SectionHeader
                  section={questions.section}
                  sectionTitle={questions.title}
                />
                <Questions fromPage={PAGE} />
              </TabPanel>
              : <></>
          }
        </TabPanels>
      </Tabs>
    </>
  );
}
