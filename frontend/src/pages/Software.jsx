import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Software() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/overview',
      name: 'Overview',
      key: 2,
    },
    {
      to: '/win10',
      name: 'Windows 10',
      key: 3,
    },
    {
      to: '/win11',
      name: 'Windows 11',
      key: 4,
    },
    {
      to: '/msoffice',
      name: 'Microsoft Office',
      key: 5,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/' />
      </div>
      <section className='heading'>
        <h1>Software</h1>
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
export default Software;
