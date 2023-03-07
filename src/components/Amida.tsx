import { useContext, useEffect } from 'react';
import { StartOptionsContext, GoalOptionsContext } from '../context/OptionsContext';
import '../css/amida.css';

const Amida = () => {
  const { startOptions, setStartOptions } = useContext(StartOptionsContext);
  const { goalOptions, setGoalOptions } = useContext(GoalOptionsContext);

  useEffect(() => {});

  let test: JSX.Element[] = [];

  for (let i = 0; i < 20; i++) {
    test.push(
      <tr>
        {startOptions.map((option) => {
          if (i % 2) {
            return <td key={option} className="pole"></td>;
          } else {
            return <td key={option} className="pole bordered"></td>;
          }
        })}
      </tr>
    );
  }

  return (
    <table>
      <thead className="amida_head">
        <tr>
          {startOptions.map((option: string, index: number) => {
            return (
              <th key={index}>
                <p>{option}</p>
                <button>go</button>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="amida_body">{test}</tbody>
      <tfoot className="amida_foot">
        <tr>
          {goalOptions.map((option: string, index: number) => {
            return (
              <th key={index}>
                <p>{option}</p>
              </th>
            );
          })}
        </tr>
      </tfoot>
    </table>
  );
};

export default Amida;
