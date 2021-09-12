import { Typography } from "@material-ui/core";
import React from "react";
import handleViewport from "react-in-viewport";

// const Block = (props: { inViewport: boolean }) => {
//   const { inViewport, forwardedRef } = props;
//   const color = inViewport ? '#217ac0' : '#ff9800';
//   const text = inViewport ? 'In viewport' : 'Not in viewport';
//   return (
//     <div className="viewport-block" ref={forwardedRef}>
//       <h3>{ text }</h3>
//       <div style={{ width: '400px', height: '300px', background: color }} />
//     </div>
//   );
// };

const Presentation = () => {
  return (
    <div>
      <Typography variant={"h2"}>Presentation</Typography>
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
        consectetur maiores, dicta aut officia sequi dolorum eaque quas dolore
        accusantium, harum dignissimos sapiente deserunt obcaecati quisquam.
        Dolores inventore obcaecati iste! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Et recusandae esse voluptate dolores,
        illum maiores expedita assumenda. Sed illum quisquam, cupiditate ab
        culpa ipsum qui odit soluta sint! In, id! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. At, laudantium. Mollitia fugit sunt
        corrupti, dolorum culpa excepturi amet, omnis quibusdam ducimus nisi
        blanditiis aliquid minima dolores magni fuga quaerat cupiditate? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Non, ratione deserunt
        minima aperiam qui mollitia cumque necessitatibus nobis possimus, illo
        esse modi! Incidunt necessitatibus fuga consequatur. Earum veritatis
        eligendi error. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat consequatur beatae eaque libero dicta aspernatur nesciunt, a
        nemo est laudantium velit, laboriosam, adipisci ut deserunt dolore vero
        incidunt quaerat voluptas!
      </Typography>
    </div>
  );
};

// const ViewportBlock = handleViewport(Presentation, {});

// export default ViewportBlock;

export default Presentation;
