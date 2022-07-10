import { useState } from 'react';

const About = () => {
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h1>About me</h1>
      <h3>Sergio Inzunza</h3>

      {visible ? <h4>sinzunza@sdgku.com</h4> : 'Click on the button below'}
      <button className="btn btn-dark" onClick={changeVisibility}>
        Show info
      </button>

      <br />
      <br />
    </div>
  );
};

export default About;
