/** @jsxImportSource theme-ui */
import React from 'react';

type SubItem = {
  href?: string | undefined;
  title: React.JSX.Element;
};

type Props = {
  data: {
    subitems?: SubItem[] | undefined;
    href?: string | undefined;
    title: React.JSX.Element;
  };
};

const isString = (value: unknown) => typeof value === 'string';

const RefLink = (props: Props) => {
  const { data } = props;
  const hasHref = 'href' in data && isString(data.href);
  const { href, title } = data;
  if (hasHref) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" sx={{ color: 'ggrey', textDecoration: 'none' }}>
        {title}
      </a>
    );
  }
  return <span>{title}</span>;
};

const RefItem = (props: Props) => {
  const { data } = props;
  const hasSubItems = 'subitems' in data && Array.isArray(data.subitems) && data.subitems.length > 0;
  return (
    <>
      <li>
        <RefLink data={data} />
      </li>
      {hasSubItems && (
        <ul>
          {'subitems' in data &&
            Array.isArray(data.subitems) &&
            data.subitems.length > 0 &&
            data.subitems.map((subitem, index) => <RefItem key={index} data={subitem} />)}
        </ul>
      )}
    </>
  );
};

export default RefItem;
