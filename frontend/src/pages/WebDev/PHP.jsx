import BackButton from '../../components/BackButton';
import { Link } from 'react-router-dom';

function PHP() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/php/docs',
      name: 'Documents',
      key: 2,
    },
    {
      to: '/php/flashcards',
      name: 'Flash Cards',
      key: 3,
    },
    {
      to: '/php/videos',
      name: 'Videos',
      key: 4,
    },
    {
      to: '/php/glossary',
      name: 'Glossary',
      key: 5,
    },
    {
      to: '/php/community',
      name: 'Community',
      key: 6,
    },
    {
      to: '/php/links',
      name: 'Links',
      key: 7,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/webdev' />
      </div>
      <section className='heading'>
        <h1>PHP</h1>
        <p>How would you like to learn?</p>
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
export default PHP;
