import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  //   const [subjects, setSubjects] = useState({
  //     Python: { key: 1, text: 'python' },
  //   });

  const subjects = [
    // {
    //   to: '/',
    //   name: 'Home',
    //   key: 1,
    // },
    {
      to: '/webdev',
      name: 'Web Development',
      key: 2,
    },
    {
      to: '/appdev',
      name: 'App Development',
      key: 3,
    },
    {
      to: '/cybersec',
      name: 'Cyber Security',
      key: 4,
    },
    {
      to: '/devops',
      name: 'DevOps',
      key: 5,
    },
    {
      to: '/hardware',
      name: 'Hardware Support',
      key: 6,
    },
    {
      to: '/software',
      name: 'Software Support',
      key: 7,
    },
  ];

  const onChange = (e) => {
    console.log(e.target.value);
    navigate(`${e.target.value}`);
  };

  return (
    <>
      <section className='heading'>
        <h1>What do you want to learn?</h1>
        <p>Please choose from an option below</p>
      </section>
      <form>
        <div className='form-group'>
          <select name='select' onChange={onChange}>
            <option value='/'>Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.key} value={subject.to}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}
export default Home;
