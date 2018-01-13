import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const FormsType2 = new ObjectType({
  name: 'Forms2',
  fields: {
    product: { type: new NonNull(StringType) },
    LotNumCodeDate: { type: new NonNull(StringType) },
    LotQuantity: { type: new NonNull(StringType) },
    NameLocation: { type: new NonNull(StringType) },
    DateShipped: { type: new NonNull(StringType) },
    QuantityOnForm: { type: new NonNull(StringType) },
    ShippedRequiredRecovery: { type: new NonNull(StringType) },
  },
});

export default FormsType2;
