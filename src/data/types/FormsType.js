import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const FormsType = new ObjectType({
  name: 'Forms1',
  fields: {
    recallCoordinator: { type: new NonNull(StringType) },
    dateTime: { type: new NonNull(StringType) },
    reason: { type: new StringType },
  },
});


export default FormsType;
