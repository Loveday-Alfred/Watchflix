import { useEffect, useState } from "react";
import useStyles from "./BottomNavStyles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Movie, Tv, Search, Home } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{ backgroundColor: "#111" }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Home"
        icon={<Home />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
