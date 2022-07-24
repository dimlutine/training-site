import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Hardware() {
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
      to: '/desktop',
      name: 'Desktop Hardware',
      key: 3,
    },
    {
      to: '/laptop',
      name: 'Laptop Hardware',
      key: 4,
    },
    {
      to: '/server',
      name: 'Server Hardware',
      key: 5,
    },
    {
      to: '/mobile',
      name: 'Mobile Devices',
      key: 6,
    },
    {
      to: '/iot',
      name: 'IoT Devices',
      key: 7,
    },
  ];
  return (
    <>
      <div>
        <BackButton url='/' />
      </div>
      <section className='heading'>
        <h1>Hardware</h1>
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
export default Hardware;
