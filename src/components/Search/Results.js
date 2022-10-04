import React from 'react'
import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export function Results({ posts }) {
    return (
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="40px">
            {posts?.map(post => <Card post={post} key={post.id} />)}
        </SimpleGrid>
    )
}
