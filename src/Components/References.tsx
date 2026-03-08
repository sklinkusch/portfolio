/** @jsxImportSource theme-ui */
import React from 'react';
import RefItem from './RefItem';
import { useAppContext } from '../Hooks/useAppContext';

type SubItem = {
  title: React.JSX.Element;
  href?: string | undefined;
};

type RefType = {
  title: React.JSX.Element;
  href?: string | undefined;
  subitems?: SubItem[] | undefined;
};

const References = () => {
  const { references } = useAppContext();
  return (
    <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
      <div sx={{ height: '1vh' }} />
      <section id="refs" sx={{ margin: '30px 0' }}>
        <h3 sx={{ mb: '1rem' }}>References</h3>
        <ul>
          {references.length > 0 &&
            references.map((reference: RefType, index: number) => <RefItem key={index} data={reference} />)}
        </ul>
      </section>
      <div sx={{ height: '1vh' }} />
    </div>
  );
};

export default References;
