export const schema = gql`
  type DadJoke {
    id: String!
    jokeString: String!
    createdAt: DateTime!
  }

  type Query {
    dadJokes: [DadJoke!]! @requireAuth
    dadJoke(id: String!): DadJoke @requireAuth
  }

  input CreateDadJokeInput {
    jokeString: String!
  }

  input UpdateDadJokeInput {
    jokeString: String
  }

  type Mutation {
    createDadJoke(input: CreateDadJokeInput!): DadJoke! @requireAuth
    updateDadJoke(id: String!, input: UpdateDadJokeInput!): DadJoke!
      @requireAuth
    deleteDadJoke(id: String!): DadJoke! @requireAuth
  }
`
