import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "wouter";

export function Card({ post }) {
    let image = "#";
    if (post?.ownership !== undefined && post.ownership.ownerships_images.length !== 0) {
        image = post.ownership.ownerships_images[0].imageurl
    }

    return (
        <Link href={`/publicaciones/detalle/${post?.id}`}>
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{
                    cursor: "pointer",
                }}
            >
                <Image
                    boxSize="300px"
                    src={image}
                    alt={post?.title}
                    objectFit="cover"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {post.ownership?.bedrooms} Dorm. &bull; {post.ownership?.bathrooms} Baños
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {post?.title}
                    </Box>

                    <Box as="span" color="gray.600" fontSize="sm">
                        $ {post?.price}
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < post.ownership?.rating ? "blue.400" : "gray.300"}
                                />
                            ))}
                        {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {post?.reviews} valoraciones
                        </Box> */}
                    </Box>
                </Box>
            </Box>
        </Link>
    );
}
