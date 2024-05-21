/** @jsxImportSource theme-ui */
import React from 'react';

type Props = {
  data: {
    href: string;
    src: any;
    title: string;
  };
};

const Example = (props: Props) => {
  const { data } = props;
  return (
    <div
      className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
      sx={{ margin: '5px', display: 'block', maxHeight: '20vw', overflow: 'hidden' }}
    >
      <a href={data.href} target="_blank" rel="noopener noreferrer">
        <img
          src={data.src}
          alt={data.title}
          title={data.title}
          className="ref-thumbnail"
          sx={{ width: '100%', height: 'auto' }}
        />
      </a>
    </div>
  );
};

export default Example;
