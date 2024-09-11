const Navbar = ({ categories, filterPosts }) => {
    return (
      <nav className="bg-white p-4 shadow-md">
        <ul className="flex space-x-6 justify-center">
          {categories.map((category, index) => (
            <li key={index} className="cursor-pointer hover:text-primary" onClick={() => filterPosts(category)}>
              {category}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  export default Navbar;
  