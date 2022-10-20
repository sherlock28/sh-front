import React from 'react';
import { FindRoommateForm } from "./FindRoommateForm";
import { FormArea } from "./FormArea";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";

export function FindRoommate() {
    const { findRoommate } = sections;

    return (
        <FormArea>
            <SectionHeader
                section={findRoommate.section}
                sectionTitle={findRoommate.title}
            />
            <FindRoommateForm />
        </FormArea>
    )
}
