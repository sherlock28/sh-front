import React from 'react';
import { Questions } from 'components/Questions'
import { useRedirect } from "hooks/utils/useRedirect";

export function QuestionsView() {

    const { isAuthenticated } = useRedirect();

    if (isAuthenticated) return <></>

    return <Questions />
}
