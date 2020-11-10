import React from "react";

function Count(props: { text: string; count: number }) {
  console.log(`RenderingCount ${props.text}`);
  return (
    <div>
      {props.text} - {props.count}
    </div>
  );
}

export default React.memo(Count);
