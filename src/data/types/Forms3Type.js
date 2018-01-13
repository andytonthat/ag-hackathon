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
        producerCheck: Boolean
        producerReason: { type: new NonNull(StringType) },
        departmentOfHealthCheck: Boolean
        departmentOfHealthReason: String
        packerCheck: Boolean
        packerReason: String
        wholesalerCheck: Boolean
        wholesalerReason: String
        retailerCheck: Boolean
        retailerReason: String
        foodServiceProviderCheck: Boolean
        foodServiceProviderReason: String
        consumerCheck: Boolean
        consumerReason: String
    },
  });

  /*

    FDAContactCheck: Boolean
  ProducerCheck: Boolean
  ProducerReason: String
  DepartmentOfHealthCheck: Boolean
  DepartmentOfHealthReason: String
  PackerCheck: Boolean
  PackerReason: String
  WholesalerCheck: Boolean
  WholesalerReason: String
  RetailerCheck: Boolean
  RetailerReason: String
  FoodServiceProviderCheck: Boolean
  FoodServiceProviderReason: String
  ConsumerCheck: Boolean
  ConsumerReason: String
  */
  
  
  export default FormsType3;
  