import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { create_at: desc }) {
      id
      name
      create_at
    }
  }
`
export const GET_USERS_LOCAL = gql`
  query GetUsers {
    users(order_by: { create_at: desc }) @client {
      id
      name
      create_at
    }
  }
`

export const GET_USERIDS = gql`
  query GetUserIds {
    users(order_by: { create_at: desc }) {
      id
    }
  }
`

export const GET_USERBY_ID = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      create_at
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      create_at
    }
  }
`

export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      create_at
      id
      name
    }
  }
`

export const UPDATE_USER = gql`
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      create_at
      id
      name
    }
  }
`
