import {
  HStack,
  Switch,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const switchSize = useBreakpointValue({ base: "md", lg: "lg" });

  return (
    <HStack>
      <Switch
        colorScheme="teal"
        size={switchSize} // Use the determined size
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />

      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorSwitchMode;
