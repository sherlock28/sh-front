import { useQuery } from '@apollo/client';
import { useSelector } from "react-redux";
import { authSelector } from "store/slices/authSlice";
import { GET_STUDENT_USER_BY_ID } from 'client/gql/queries/users';

export function useGetUser() {

    const { user: currentUser } = useSelector(authSelector);

    let variables = { "id": currentUser.id };

    const { loading, error, data: user } = useQuery(GET_STUDENT_USER_BY_ID, { variables });

    return {
        loading,
        error,
        user: user?.sh_users.at(0)
    };
}
