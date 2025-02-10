import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const [platformName, setPlatformName] = useState("Platforms");

  if (error) return null;
  if (isLoading) {
    return <Spinner />;
  }

  const onPlatformChanged = (platform: Platform) => {
    setPlatformName(platform.name);
    onSelectPlatform(platform);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformChanged(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
