import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const RecallType = new ObjectType({
  name: 'Recall',
  fields: {
    id: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    contactInfo: { type: new NonNull(StringType) },
    dateTime: { type: new NonNull(StringType) },
    recallReason: { type: new NonNull(StringType) },
  },
});

export default RecallType;
