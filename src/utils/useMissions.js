import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_MISSION = gql`
  query GetLocations {
    launchesPast(limit: 10) {
      mission_name
      id
      links {
        video_link
        wikipedia
        mission_patch
      }
      rocket {
        rocket_name
        rocket_type

        rocket {
          id
          country
          height {
            meters
          }
          mass {
            kg
          }
        }
      }
      details
      launch_date_local
      launch_success
    }
  }
`;

const useMissions = () => {
  const { loading, data, error } = useQuery(GET_MISSION);
  return { loading, data, error };
};

export { useMissions };
