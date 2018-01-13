import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
    GraphQLBoolean as BooleanType,
  } from 'graphql';
  

  const FormsType4 = new ObjectType({
    name: 'Forms4',
    fields: {
        RecallCoordinator: { type: new NonNull(StringType) },
        OperationName: { type: new NonNull(StringType) },
        LotNum: { type: new NonNull(StringType) },
        DateTime: { type: new NonNull(StringType) },
        Comments: { type: new NonNull(StringType) },
        ContactName: { type: new NonNull({ type: new NonNull(StringType) },Type) },
        PhoneNum: { type: new NonNull(StringType) },
        FaxNum: { type: new NonNull(StringType) },
        Title: { type: new NonNull(StringType) },
        ProductRecall: { type: new NonNull(BooleanType) },
        ProductReturnedDestroyedComment: { type: new NonNull(StringType) },
        ActionIntended: { type: new NonNull(StringType) },
        IllnessOrInjury: { type: new NonNull(BooleanType) },
        IllnessOrInjuryComment: { type: new NonNull(StringType) },
    },
  });
  export default FormsType4;
  