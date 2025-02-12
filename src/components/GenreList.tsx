import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  //selectedGenreId: number;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const [selectedGenreId, setSelectedGenreId] = useState<number>(-1);

  if (error) return null;
  if (isLoading) {
    return <Spinner />;
  }

  const onSelectedGenreChanged = (genre: Genre) => {
    setSelectedGenreId(genre.id);
    onSelectGenre(genre);
  };

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {error && isLoading && <Text color="red"> {error} </Text>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectedGenreChanged(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
