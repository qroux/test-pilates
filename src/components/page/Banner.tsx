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
          "url(https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3746&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Typography variant="h1" style={{ color: "white" }}>
          Test Banner
        </Typography>
        <Typography variant="h3" color="primary">
          autre
        </Typography>
        <strong>Test Banner</strong>
      </div>
    </div>
  );
};

export default Banner;
