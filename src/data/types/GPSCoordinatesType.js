import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const GPSCoordinatesType = new ObjectType({
  name: 'GPSCoordinates',
  fields: {
    Longitude: { type: new NonNull(StringType) },
    Latitude: { type: new NonNull(StringType) },
  },
});
export default GPSCoordinatesType;
