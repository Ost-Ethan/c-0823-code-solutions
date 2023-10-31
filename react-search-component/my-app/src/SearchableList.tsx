type search = {
  searchString: string;
};

export default function SearchableList({ searchString }: search) {
  const ListItems = [
    'List Items are here!',
    'Donkey Kong is my favorite game!',
    'When will I be able to drive?',
  ];

  const filteredListItems = ListItems.filter((item) =>
    item.toLowerCase().includes(searchString.toLowerCase())
  );
  const liItems = filteredListItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return <ul>{liItems}</ul>;
}
