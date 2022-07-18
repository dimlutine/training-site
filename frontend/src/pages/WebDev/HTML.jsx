import BackButton from '../../components/BackButton';
import { Link } from 'react-router-dom';

function HTML() {
  const content = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/html/docs',
      name: 'Documents',
      key: 2,
    },
    {
      to: '/html/flashcards',
      name: 'Flash Cards',
      key: 3,
    },
    {
      to: '/html/videos',
      name: 'Videos',
      key: 4,
    },
    {
      to: '/html/glossary',
      name: 'Glossary',
      key: 5,
    },
    {
      to: '/html/community',
      name: 'Community',
      key: 6,
    },
    {
      to: '/html/links',
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
        <h1>HTML</h1>
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
export default HTML;
