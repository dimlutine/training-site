import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function AppDev() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/java',
      name: 'Java',
      key: 2,
    },
    {
      to: '/cplusplus',
      name: 'C++',
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
      to: '/csharp',
      name: 'C#',
      key: 6,
    },
    {
      to: '/rust',
      name: 'Rust',
      key: 7,
    },
    {
      to: '/kotlin',
      name: 'Kotlin',
      key: 8,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/' />
      </div>
      <section className='heading'>
        <h1>App Development</h1>
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
export default AppDev;
