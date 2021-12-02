import { useEffect, useState } from "react";
let finalValue = null;
function StopWatch({ initial }) {
  // console.log(final);
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now(), value);
      setValue((prev) => {
        if (prev - 1 === 0) clearInterval(id);
        return prev - 1;
      });
      // console.log(Date.now(), value);
    }, 1000);
    return () => {
      console.log("cleaninng");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div>
        <h2>Countdown</h2>
        <h2>{value}</h2>
      </div>
    </>
  );
}
export default function Countdown() {
  const [hide, setHide] = useState(false);
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  return (
    <>
      {hide && <StopWatch initial={10} />}

      <button onClick={() => setHide(!hide)}>
        {hide == false ? "Start" : "Stop"}
      </button>
    </>
  );
}
