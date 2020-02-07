import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const Searchbar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = e => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBotton: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Loggs.."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLogs })(Searchbar);
