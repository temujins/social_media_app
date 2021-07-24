import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    paddingBottom: "20px",
    marginTop: "20px",
  },

  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  comments: {
    height: "max-content",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 0,
    marginTop: "25px",
  },

  username: {
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none",
    border: "none",
    fontWeight: "500",
    padding: 0,
    paddingRight: "5px",
  },
});
