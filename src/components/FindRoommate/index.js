import React from 'react';
import { Box, Center } from "@chakra-ui/react";
import { Loading } from "components/commons/Loading";
import { FindRoommateForm } from "./FindRoommateForm";
import { FormArea } from "./FormArea";
import { Results } from "./Results";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";
import { useAxios } from "hooks/utils/useAxios";

let idPerson = 1;
const URL = `${process.env.REACT_APP_API_URL_RECOMM}/recomendation/${idPerson}`;

export function FindRoommate() {
    const { findRoommate } = sections;
    const { response, error, loading } = useAxios({ url: URL, method: "get" });

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
                {loading ? <Loading minH={"30vh"} size={"lg"} m={20} /> : <Results recomms={response?.data} />}
            </Center>
        </Box>
    </>
    )
}
