import { useQuery } from '@apollo/client';
import { useSelector } from "react-redux";
import { authSelector } from "store/slices/authSlice";
import { GET_OWNER_BY_ID } from 'client/gql/queries/users';

export function useGetOwnerId() {

    const { user: currentUser } = useSelector(authSelector);

    let variables = { "id": currentUser.id };

    const { loading, error, data: owner } = useQuery(GET_OWNER_BY_ID, { variables });
    
    return {
        loading,
        error,
        owner_id: owner?.sh_users.at(0).person.owners.at(0).id
    };
}
