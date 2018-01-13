import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const FormsType5 = new ObjectType({
  name: 'Forms5',
  fields: {
    QuantityShipped: { type: new NonNull(StringType) },
    DateTime: { type: new NonNull(StringType) },
    PersonContacted: { type: new NonNull(StringType) },
    QuantityRecoveredOrDestroyed: { type: new NonNull(StringType) },
    QuantityRemaining: { type: new NonNull(StringType) },
    ActionTaken: { type: new NonNull(StringType) },
    QuantityRecovered: { type: new NonNull(StringType) },
  },
});
export default FormsType5;
