/** @jsxImportSource theme-ui */
import { useAppContext } from '../Hooks/useAppContext';
import CompskillCard from './CompskillCard';

const CompskillsMediumLarge = () => {
  const { skills } = useAppContext();
  return (
    <section id="compskills" className="d-none d-md-block" sx={{ margin: '30px 0' }}>
      <h3 sx={{ mb: '1rem' }}> Computer-related Skills</h3>
      {skills.length > 0 &&
        skills.map((skill, index: number) => (
          <article key={index}>
            <h4>{skill.title}</h4>
            <div className="row album">
              {skill.content.map((singleSkill, index) => (
                <CompskillCard skill={singleSkill} key={index} />
              ))}
            </div>
          </article>
        ))}
    </section>
  );
};

const CompskillsSmall = () => {
  const { skills } = useAppContext();
  return (
    <section id="compskills" className="d-block d-md-none" sx={{ margin: '30px 0' }}>
      <h3 sx={{ mb: '1rem' }}> Computer-related Skills</h3>
      {skills.length > 0 &&
        skills.map((skill, oindex: number) => (
          <details key={oindex}>
            <summary>
              {/* <h4> */}
              {skill.title} ({skill.content.length}){/* </h4> */}
            </summary>
            <div className="row album">
              {skill.content.map((singleSkill, index) => (
                <CompskillCard skill={singleSkill} key={index} />
              ))}
            </div>
          </details>
        ))}
    </section>
  );
};

const Compskills = () => (
  <div className="container" sx={{ backgroundColor: 'wwhite', opacity: 0.95, borderRadius: '10px' }}>
    <div sx={{ height: '1vh' }} />
    <CompskillsMediumLarge />
    <CompskillsSmall />
    <div sx={{ height: '1vh' }} />
  </div>
);

export default Compskills;
