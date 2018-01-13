import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
    GraphQLBoolean as BooleanType,
  } from 'graphql';
  
  const FormsType6 = new ObjectType({
    name: 'Forms6',
    fields: {
        RecallReason: { type: new NonNull(StringType) },
        CorrectiveACtion: { type: new NonNull(StringType) },
        OngoingProcedures: { type: new NonNull(StringType) },
        PersonsResponsible: { type: new NonNull(StringType) },
    },
  });
  export default FormsType6;
  