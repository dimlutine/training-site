import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function WebDev() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/html',
      name: 'HTML',
      key: 2,
    },
    {
      to: '/css',
      name: 'CSS',
      key: 3,
    },
    {
      to: '/javascript',
      name: 'JavaScript',
      key: 4,
    },
    {
      to: '/python',
      name: 'Python',
      key: 5,
    },
    {
      to: '/php',
      name: 'PHP',
      key: 6,
    },
    {
      to: '/ruby',
      name: 'Ruby',
      key: 7,
    },
    {
      to: '/swift',
      name: 'Swift',
      key: 8,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/' />
      </div>
      <section className='heading'>
        <h1>Web Development</h1>
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
export default WebDev;
