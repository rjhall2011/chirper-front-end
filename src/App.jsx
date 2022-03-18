import React, { useState, useEffect } from "react";
import ChirpSyntax from "./ChirpCard"
const App = () => {
  //   const [email, setEmail] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [chirp, setChirp] = useState(" ");
  // const [time, setTime] = useState(new Date().toString())
  const [timelineData, setTimelineData] = useState([
    {
      username: 'Josh',
      msg: "Milos has the best Tea in the South #MakeMilosGreatAgain #sweettea",
      
    },
    {
      username: 'Garrett',
      msg: "If I hear someone use pizza one more time in these coding videos #tiredofpizza",
    },
    {
      username: 'Will Smith',
      msg: "I thought twitter was good but...#chirpisbetter",
    },
  ]);



  let newchirps = () => {
    setTimelineData([
      ...timelineData,
       {username: username,
       msg: chirp,}
    ]);
  };

  return (
    <>
      <div>
        <p>Express Yourself</p>
        <button
          onClick={() => {
            newchirps();
          }}
        >
          Username 
        </button>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input value={chirp} onChange={(e) => setChirp(e.target.value)} />
      </div>

      
      <section className="row justify-content-center">
        <div className="message">
          <ul className="list-group">
            {timelineData.map((val) => {
              return (
                <li className="list-group-item" key={chirp.id}>
                  <ChirpSyntax
                    username={val.username}
                    msg={val.msg}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default App;
