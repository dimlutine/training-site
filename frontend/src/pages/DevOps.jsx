import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function DevOps() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/linux',
      name: 'Linux',
      key: 2,
    },
    {
      to: '/buildtools',
      name: 'Build Tools',
      key: 3,
    },
    {
      to: '/continuousintdep',
      name: 'Continuous Integration and Deployment',
      key: 4,
    },
    {
      to: '/scripting',
      name: 'Scripting',
      key: 5,
    },
    {
      to: '/cloudtech',
      name: 'Cloud Technology',
      key: 6,
    },
    {
      to: '/monitoringtools',
      name: 'Monitoring Tools',
      key: 7,
    },
    {
      to: '/configmgmt',
      name: 'Configuration Management',
      key: 8,
    },
    {
      to: '/contvirt',
      name: 'Containerization and Virtualization',
      key: 9,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/' />
      </div>
      <section className='heading'>
        <h1>DevOps</h1>
        <p>Please choose a subject below to get started</p>
      </section>
      <main>
        {content.map((subject) => (
          <Link to={subject.to}>
            <button key={subject.key} className='btn btn-block btn-reverse'>
              {subject.name}
            </button>
          </Link>
        ))}
      </main>
    </>
  );
}
export default DevOps;
