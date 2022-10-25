import React from 'react';
import { Box, Center } from "@chakra-ui/react";
import { FindRoommateForm } from "./FindRoommateForm";
import { FormArea } from "./FormArea";
import { Results } from "./Results";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";
import { initialRecomms } from "./initialRecomms";

export function FindRoommate() {
    const { findRoommate } = sections;

    return (<>
        <FormArea>
            <SectionHeader
                section={findRoommate.section}
                sectionTitle={findRoommate.title}
            />
            <FindRoommateForm />
        </FormArea>
        <Box width={"100%"} my={20}>
            <Center>
                <Results recomms={initialRecomms} />
            </Center>
        </Box>
    </>
    )
}
