import React, { useState } from "react";
import { Box, Flex, Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { SectionHeader } from "components/commons/SectionHeader";
// import { RegisterForm } from "./RegisterForm";
// import { RegisterFormOwner } from "./RegisterFormOwner";
import { sections } from "config/sections";

export function SignUpArea() {
    const { register } = sections;
    const [isOwner, setIsOwner] = useState(false);

    return (
        <>
            <Flex
                width="full"
                align="center"
                my={8}
                justifyContent="center"
            >
                <Box
                    borderWidth={1}
                    px={4}
                    width="full"
                    maxWidth="900px"
                    borderRadius={4}
                    textAlign="center"
                    boxShadow="lg"
                >
                    <FormControl
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mt={4}
                    >
                        <FormLabel htmlFor="type-user" mb="0">
                            ¿Eres propietario?
                        </FormLabel>
                        <Switch
                            onChange={() => setIsOwner(!isOwner)}
                            size="lg"
                            id="ype-user"
                        />
                    </FormControl>
                    <Box p={4}>
                        <SectionHeader section={register.section} sectionTitle={register.title} isOwner={isOwner} />
                        {/* {isOwner ? <RegisterFormOwner /> : <RegisterForm />} */}
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
