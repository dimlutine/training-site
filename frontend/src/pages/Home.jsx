import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  //   const [subjects, setSubjects] = useState({
  //     Python: { key: 1, text: 'python' },
  //   });

  const subjects = [
    { key: 1, text: 'python', pretty: 'Python' },
    { key: 2, text: 'javascript', pretty: 'JavaScript' },
  ];

  const onChange = (e) => {
    console.log(e.target.value);
    navigate(`/${e.target.value}`);
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
              <option key={subject.key} value={subject.text}>
                {subject.pretty}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}
export default Home;
