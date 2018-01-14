import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const FormsType3 = new ObjectType({
  name: 'Forms3',
  fields: {
    fDAContactCheck: { type: new NonNull(BooleanType) },
    producerCheck: { type: new NonNull(BooleanType) },
    producerReason: { type: new NonNull(StringType) },
    departmentOfHealthCheck: { type: new NonNull(BooleanType) },
    departmentOfHealthReason: { type: new NonNull(StringType) },
    packerCheck: { type: new NonNull(BooleanType) },
    packerReason: { type: new NonNull(StringType) },
    wholesalerCheck: { type: new NonNull(BooleanType) },
    wholesalerReason: { type: new NonNull(StringType) },
    retailerCheck: { type: new NonNull(BooleanType) },
    retailerReason: { type: new NonNull(StringType) },
    foodServiceProviderCheck: { type: new NonNull(BooleanType) },
    foodServiceProviderReason: { type: new NonNull(StringType) },
    consumerCheck: { type: new NonNull(BooleanType) },
    consumerReason: { type: new NonNull(StringType) },
  },
});
export default FormsType3;
