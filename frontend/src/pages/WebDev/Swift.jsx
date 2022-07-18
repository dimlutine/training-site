import BackButton from '../../components/BackButton';
import { Link } from 'react-router-dom';

function Swift() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/swift/docs',
      name: 'Documents',
      key: 2,
    },
    {
      to: '/swift/flashcards',
      name: 'Flash Cards',
      key: 3,
    },
    {
      to: '/swift/videos',
      name: 'Videos',
      key: 4,
    },
    {
      to: '/swift/glossary',
      name: 'Glossary',
      key: 5,
    },
    {
      to: '/swift/community',
      name: 'Community',
      key: 6,
    },
    {
      to: '/swift/links',
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
        <h1>Swift</h1>
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
export default Swift;
