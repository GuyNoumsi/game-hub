import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (value: string) => void;
}

const SortSelector = ({ onSelectSort }: Props) => {
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const onSortChanged = (newSort: { value: string; label: string }) => {
    setSelectedSort(newSort.label);
    onSelectSort(newSort.value);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${selectedSort}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem key={sort.value} onClick={() => onSortChanged(sort)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
