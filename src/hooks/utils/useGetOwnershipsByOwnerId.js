import { useQuery } from '@apollo/client';
import { GET_OWNERSHIPS_BY_OWNER_ID } from "client/gql/queries/utils";
import { useGetOwnerId } from "hooks/utils/useGetOwnerId";

export function useGetOwnershipsByOwnerId() {

    const { owner_id } = useGetOwnerId();

    let variables = { "owner_id": owner_id };

    const { loading, error, data: ownerships } = useQuery(GET_OWNERSHIPS_BY_OWNER_ID, { variables });

    return { loading, error, ownerships: ownerships?.sh_ownerships };
}