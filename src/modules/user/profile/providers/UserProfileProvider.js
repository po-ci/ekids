import graphqlClient from "../../../../apollo";
import gql from "graphql-tag";


class TemplateProvider {

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

    changePassword(password, passwordConfirm) {
        return graphqlClient.mutate({
            mutation: gql`mutation ( $password: String!, $passwordConfirm: String!){
                changeAvatar(password: $password, passwordConfirm: $passwordConfirm){
                    status
                    message
                }
            }`,
            variables: {
                password: password,
                passwordConfirm: passwordConfirm
            },
        })
    }


}

export default new TemplateProvider()