import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function CyberSec() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/appsec',
      name: 'Application Security',
      key: 2,
    },
    {
      to: '/dlp',
      name: 'Data Loss Prevention',
      key: 3,
    },
    {
      to: '/forensics',
      name: 'Forensics',
      key: 4,
    },
    {
      to: '/incidentresponse',
      name: 'Incident Response',
      key: 5,
    },
    {
      to: '/netsec',
      name: 'Network Security',
      key: 6,
    },
    {
      to: '/threatintel',
      name: 'Threat Intelligence',
      key: 7,
    },
    {
      to: '/vulnmgmt',
      name: 'Vulnerability Management',
      key: 8,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/' />
      </div>
      <section className='heading'>
        <h1>Cyber Security</h1>
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
export default CyberSec;
