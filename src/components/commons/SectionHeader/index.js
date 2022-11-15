import React from "react";
import { Box, Heading, Text, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "wouter";
import { paths } from "config/paths";

export function SectionHeader({ section, sectionTitle, isOwner }) {
  let title = null;
  let subTitle = null;

  if (section === "Login") {
    title = (<Heading>{sectionTitle}</Heading>);
    subTitle = (
      <Text mt={4}>
        ¿Todavía no tenés cuenta en Segundo Hogar?{" "}
        <Link to={paths.register}>
          <LinkChakra color={'blue.400'}>Clic aquí</LinkChakra>
        </Link>
      </Text>
    );
  }

  if (section === "Register") {
    title = (
      <Heading>
        {sectionTitle}{isOwner ? "propietario" : "estudiante"}
      </Heading>
    );
    subTitle = (
      <>
        <Text mt={4}>
          ¿Ya tenés cuenta con Segundo Hogar?{" "}
          <Link to={paths.login}>
            <LinkChakra color={'blue.400'}>Clic aquí</LinkChakra>
          </Link>
        </Text>
      </>
    );
  }

  if (section === "Questions") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  if (section === "Tags") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  if (section === "Profile") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  if (section === "Search") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  if (section === "RegisterHouse") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  if (section === "RegisterPublication") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  if (section === "FindRoommate") {
    title = (<Heading>{sectionTitle}</Heading>);
  }

  return (
    <Box textAlign="center">
      {title}
      {subTitle}
    </Box>
  );
}
