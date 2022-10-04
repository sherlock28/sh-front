import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { FormArea } from './FormArea';
import { Results } from './Results';
import { useInitialPublications } from "hooks/pages/Search/useInitialPublications";
import { Loading } from "components/commons/Loading";

export function Search() {
    const { loading, error, initialPublications } = useInitialPublications();

    if (loading) return <Loading minH={"60vh"} size={"lg"} m={50}/>;
    if (error) return <div>Error!</div>;

    return (
        <>
            <FormArea posts={initialPublications} />
            <Box width={"100%"} my={20}>
                <Center>
                    <Results posts={initialPublications} />
                </Center>
            </Box>
        </>
    )
}
