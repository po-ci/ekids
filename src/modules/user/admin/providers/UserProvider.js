import graphqlClient from "../../../vue-apollo";
import graphqlUpload from "../../../vue-apollo-upload"
import gql from "graphql-tag";
import {SET_ROLES, SET_ROLES_LOADING} from "../storage/user-mutations-type";


class UserProvider {


    fetchAll() {
        return graphqlClient.query({
            query: gql`query users{
                        users{
                            id
                            firstName
                            username
                            email
                            isActive
                            phone
                            avatar{
                                image
                            }
                            groups{
                                id
                               }
                            }
                          }`
        })
    }


    fetchAllRoles() {
        return graphqlClient.query({
            query: gql`
                query group{
                        group{
                            id
                            name
                            }
                          }`
        })
    }


    create(username, email, password, password_verify, phone, groups, firstName, isActive) {
        return graphqlClient.mutate({
            mutation: gql`
                mutation ( $username: String!,$password: String!, $password2: String!, $email: String!, $firstName:String!, 
                           $phone: String!, $groups: [ID]!, $isActive: Boolean! ){
                registerUser(input:{username:$username ,password:$password, password2:$password2, 
                            email:$email, firstName:$firstName, phone:$phone, groups: $groups, isActive: $isActive}){
                    user{
                            id
                            firstName
                            username
                            avatar{
                                image
                            }
                            email
                            isActive
                            phone
                            groups{
                                    id
                                    name
                                }
                        }
                        errors{
                            field
                            messages
                        }
                    }
                }`, variables: {
                username: username,
                email: email,
                password: password,
                password2: password_verify,
                phone: phone,
                groups: groups,
                firstName: firstName,
                isActive: isActive
            }
        })
    }

    password(id, password, password_verify) {
        return graphqlClient.mutate({
            mutation: gql`
                mutation($id: Int!, $password:String!, $password2:String!){
                  changePassword(id:$id, password:$password, password2:$password2){
                    status{
                            status
                            message
                            }
                           }
                        }`,
            variables: {
                id: id,
                password: password,
                password2: password_verify
            }
        })
    }


    update(id, email, phone, groups, firstName, isActive) {
        return graphqlClient.mutate({
            mutation: gql`
                mutation ( $id: ID!, $email: String!, $firstName:String!, 
                           $phone: String!, $groups: [ID]!, $isActive: Boolean! ){
                updateUser(input:{id: $id, email:$email, firstName:$firstName, 
                               phone:$phone, groups: $groups, isActive: $isActive}){
                    user{
                            id
                            firstName
                            username
                            avatar{
                                image
                            }
                            email
                            isActive
                            phone
                            groups{
                                    id
                                    name
                            }
                            avatar{
                                image
                            }
                        }
                          errors{
                            field   
                            messages
                        }
                    }
                }`, variables: {
                id: id,
                email: email,
                phone: phone,
                groups: groups,
                firstName: firstName,
                isActive: isActive
            }
        })
    }

    recoveryPassword(email) {
        return graphqlClient.mutate({
            mutation: gql`mutation ( $mail: String!){
                recoveryPassword(to: $mail){
                    mail{
                            date
                        }
                    }
                }`,
            variables: {
                mail: email
            },
        })
    }

}

export default new UserProvider()