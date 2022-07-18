import BackButton from '../../components/BackButton';
import { Link } from 'react-router-dom';

function Python() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/python/docs',
      name: 'Documents',
      key: 2,
    },
    {
      to: '/python/flashcards',
      name: 'Flash Cards',
      key: 3,
    },
    {
      to: '/python/videos',
      name: 'Videos',
      key: 4,
    },
    {
      to: '/python/glossary',
      name: 'Glossary',
      key: 5,
    },
    {
      to: '/python/community',
      name: 'Community',
      key: 6,
    },
    {
      to: '/python/links',
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
        <h1>Python</h1>
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
export default Python;
