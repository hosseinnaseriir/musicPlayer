import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(180deg, #333333 0%, #23352A 100%)",
    color: theme.palette.common.white,
  },
  headerItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  musicCover: {
    height: 308,
    width: 308,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    boxShadow: " -2px 13px 45px -24px #F2F2F24D",
    "& svg": {
      fontSize: 120,
    },
  },
  musicDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 48,
  },
  musicControls: {
    display: "flex",
    gap: 16,
    "& button": {
      width: 50,
      height: 50,
      borderRadius: "50%",
      "& svg": {
        fontSize: 30,
      },
    },
  },
  musicProgressMain: {
    position: "relative",
    height: 30,
    width: "100%",
    borderRadius: 40,
    backgroundColor: theme.palette.grey[100],
    overflow: "hidden",
    "& input": {
      width: "100%",
      display: "block",
      appearance: "none",
      height: "100%",
      "&::-webkit-slider-thumb": {
        appearance: "none",
        height: 48,
        width: 20,
        backgroundColor: "transparent",
        
      },
      "&::-ms-track": {
        background: "red",
      },
    },
  },
  musicProgressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    pointerEvents: "none",
    borderRadius: 40,
    background:
      "linear-gradient(90deg, rgba(29, 185, 84, 0.75) 0%, rgba(19, 114, 53, 0.75) 100%)",
  },
}));
