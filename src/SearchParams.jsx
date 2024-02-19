const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location" type="text" value={location} />
        </label>
      </form>
    </div>
  );
};
