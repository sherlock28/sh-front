import React from 'react';
import { useLocation } from "wouter";
import { paths } from "config/paths";
import { Tags } from 'components/Tags';
import { useRedirect } from "hooks/utils/useRedirect";
import { USER_CATEGORIES } from "const";

export function TagsView() {
    const [_, setLocation] = useLocation();

    const { isAuthenticated, user_category } = useRedirect();

    if (isAuthenticated && user_category != USER_CATEGORIES.DEFAULT) {
        setLocation(paths.search);
    }

    return <Tags />
}
