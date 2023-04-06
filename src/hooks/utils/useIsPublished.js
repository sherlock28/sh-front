import { useLazyQuery } from '@apollo/client';
import { IS_PUBLISHED } from "client/gql/queries/utils";

export function useIsPublished() {

    let variables = { "id": -1 };

    const [isPublishedOwnership, { loading, error, data: publications }] = useLazyQuery(IS_PUBLISHED, { variables });


    const isPublished = publications?.sh_publications.length === 0;

    const isPublishedO = (id) => {
        variables.id = id;
        isPublishedOwnership();
    }

    return { isPublishedO, loading, error, isPublished: isPublished };
}