import graphqlClient from "../../../../apollo";
import gql from "graphql-tag";


class UserProfileProvider {

    changeAvatar(email) {
        return graphqlClient.mutate({
            mutation: gql`mutation ( $id: Integer!, $img: Upload!){
                changeAvatar(id: $id, img: img){
                    status
                    message
                }
            }`,
            variables: {
                id: id,
                img: img
            },
        })
    }

    changePassword( password, passwordVerify) {
        return graphqlClient.mutate({
            mutation: gql`mutation ($password: String!, $passwordVerify: String!){
                changePassword( password: $password, passwordVerify: $passwordVerify){
                    status
                    message
                }
            }`,
            variables: {
                password: password,
                passwordVerify: passwordVerify
            },
        })
    }


}

export default new UserProfileProvider()