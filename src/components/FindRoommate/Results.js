import React from 'react'
import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export function Results({ recomms }) {

    return (
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="40px">
            {recomms?.map(recomm => <Card recomm={recomm} key={recomm.id} />)}
        </SimpleGrid>
    )
}
