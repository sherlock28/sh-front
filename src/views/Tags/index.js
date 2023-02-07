import React from 'react';
import { Tags } from 'components/Tags';
import { useRedirect } from "hooks/utils/useRedirect";

export function TagsView() {

    const { isAuthenticated } = useRedirect();

    if (isAuthenticated) return <></>

    return <Tags />
}
