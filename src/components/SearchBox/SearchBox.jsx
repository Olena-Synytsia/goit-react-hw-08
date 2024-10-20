import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";

import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input type="text" className={s.input} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
