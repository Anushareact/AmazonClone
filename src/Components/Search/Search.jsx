import React,{useState} from "react";
import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";
import { HeaderItems } from "../Utils";
import { useNavigate,createSearchParams } from "react-router-dom";
const Search = () => {
    const [searchval, setSearchval]=useState("");
    const [Category,setCategory]=useState('All');
    console.log(Category);
    const navigate=useNavigate();











    const HandleSubmit=()=>{
console.log("search",searchval);

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${Category}`,
        searchval: `${searchval}`,
      })}`,
    });

setSearchval("");
setCategory("All")

    }
  return (
    <div className={styles.searchContainer}>
      <div className={styles.alldropdown}>
        <select onChange={(e) => setCategory(e.target.value)}>
          {HeaderItems?.map((HeaderItem) => (
            <option>{HeaderItem}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          className={styles.searchinput}
          placeholder="Search here"
          value={searchval}
          onChange={(e) => setSearchval(e.target.value)}
        ></input>
      </div>
      <div className={styles.searchIconDivision}>
        <button className={styles.searchicon}>
          <BsSearch onClick={HandleSubmit} />
        </button>
      </div>
    </div>
  );
};

export default Search;
