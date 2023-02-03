import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { FormArea } from './FormArea';
import { Results } from './Results';
import { useInitialPublications } from "hooks/pages/Search/useInitialPublications";
import { Loading } from "components/commons/Loading";

export function Search() {
    const { publications, isError, isFetching } = useInitialPublications();

    if (isFetching) return <Loading minH={"60vh"} size={"lg"} m={50} />;
    if (isError) return <div>Error!</div>;

    return (
        <>
            <FormArea posts={publications} />
            <Box width={"100%"} my={20}>
                <Center>
                    <Results posts={publications} />
                </Center>
            </Box>
        </>
    )
}
