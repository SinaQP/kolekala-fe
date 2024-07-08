
import { gql } from "@apollo/client";

export const GET_RICKS = gql`
{
    list {
      name
      isValid
    }
}
`
