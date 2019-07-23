import graphqlClient from "../../../../apollo";
import gql from "graphql-tag";


class UserRegisterProvider {

    someAction(email) {
        return graphqlClient.mutate({
            mutation: gql`mutation ( $someParam: String!){
                someMutation(someParam: $someParam){
                    status
                    message
                }
            }`,
            variables: {
                someParam: someParam
            },
        })
    }


}

export default new UserRegisterProvider()