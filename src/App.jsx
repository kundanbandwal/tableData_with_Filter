import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await data.json();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <img src={reactLogo} alt="" />
      </div>
      Search By Title =
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid orange', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid orange', padding: '8px' }}>
              UserId
            </th>
            <th style={{ border: '1px solid orange', padding: '8px' }}>
              Title
            </th>
            <th style={{ border: '1px solid orange', padding: '8px' }}>Desc</th>
          </tr>
        </thead>
        {filteredData.length === 0 ? (
          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            No Data Found
          </div>
        ) : (
          <tbody>
            {filteredData.map((item) => {
              return (
                <tr key={item.id}>
                  <td style={{ border: '1px solid orange', padding: '8px' }}>
                    {item.id}
                  </td>
                  <td style={{ border: '1px solid orange', padding: '8px' }}>
                    {item.userId}
                  </td>
                  <td style={{ border: '1px solid orange', padding: '8px' }}>
                    {item.title}
                  </td>
                  <td style={{ border: '1px solid orange', padding: '8px' }}>
                    {item.body}
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </>
  );
}

export default App;
