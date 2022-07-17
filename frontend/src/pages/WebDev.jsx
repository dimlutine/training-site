import { useNavigate } from 'react-router-dom';

function WebDev() {
  const navigate = useNavigate();
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
  const onChange = (e) => {
    console.log(e.target.value);
    navigate(`${e.target.value}`);
  };
  return (
    <>
      <section className='heading'>
        <h1>Web Development</h1>
        <p>Please choose a subject below to get started</p>
      </section>
      <form>
        <div className='form-group'>
          <select name='select' onChange={onChange}>
            <option value='/'>Select a subject</option>
            {content.map((subject) => (
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
export default WebDev;
