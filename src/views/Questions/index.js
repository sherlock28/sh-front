import React from 'react';
import { useLocation } from "wouter";
import { paths } from "config/paths";
import { Questions } from 'components/Questions'
import { useRedirect } from "hooks/utils/useRedirect";
import { USER_CATEGORIES } from "const";

export function QuestionsView() {
    const [_, setLocation] = useLocation();

    const { isAuthenticated, user_category } = useRedirect();

    if (isAuthenticated && user_category != USER_CATEGORIES.DEFAULT) {
        setLocation(paths.search);
    }

    return <Questions />
}
