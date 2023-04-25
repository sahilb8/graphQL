const buildSchema = require('graphql').buildSchema;

module.exports = buildSchema(`
    type testData {
        text: String!
        views: Int!
    }

    type rootQuery {
        hello: testData
    }

    schema {
        query: rootQuery
    }
`);