import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && isLoading && <Text color="red"> {error} </Text>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
