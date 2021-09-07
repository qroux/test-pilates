import { Typography } from "@material-ui/core";

const Banner = () => {
  return (
    <div
      style={{
        height: "50rem",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1561211919-1947abbbb35b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3751&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Typography
          variant="h1"
          style={{ fontWeight: "bold" }}
          color="textSecondary"
        >
          Test Banner
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
