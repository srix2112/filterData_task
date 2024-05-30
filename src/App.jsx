import { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Shubham',
    city: 'Jaunpur',
    category: 'one',
    type: 'A',
    active: false,
  },
  {
    id: 2,
    name: 'Suryansh',
    city: 'Varanasi',
    category: 'two',
    type: 'B',
    active: true,
  },
  {
    id: 3,
    name: 'Gorakh',
    city: 'Jaunpur',
    category: 'one',
    type: 'B',
    active: false,
  },
  {
    id: 4,
    name: 'Kalpana',
    city: 'Ballia',
    category: 'two',
    type: 'A',
    active: true,
  },
  {
    id: 5,
    name: 'Rashmi',
    city: 'Jaunpur',
    category: 'one',
    type: 'C',
    active: false,
  },
  {
    id: 6,
    name: 'Gaurav',
    city: 'Jaunpur',
    category: 'two',
    type: 'A',
    active: false,
  },
];

function App() {
  const [jsonData, setJsonData] = useState(data);

  const handleFilter = (filterData) => {
    let newData = data;

    if (filterData.city) {
      newData = newData.filter((item) => item.city === filterData.city);
    }
    if (filterData.category) {
      newData = newData.filter((item) => item.category === filterData.category);
    }
    if (filterData.type) {
      newData = newData.filter((item) => item.type === filterData.type);
    }
    if (filterData.active) {
      newData = newData.filter((item) => item.active.toString() === filterData.active);
    }
    if (filterData.name) {
      newData = newData.filter((item) => item.name.toLowerCase().includes(filterData.name.toLowerCase()));
    }
    setJsonData(newData);
  };
  console.log('jsonData->', jsonData);

  return (
    <>
      <MultiFilter handleFilter={handleFilter} />
      <Table fullData={jsonData} />
    </>
  );
}

function MultiFilter({ handleFilter }) {
  const [filterData, setFilterData] = useState({
    name:'',
    city: '',
    category: '',
    type: '',
    active: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilterData = { ...filterData, [name]: value };
    // console.log('newFilterData-->>', newFilterData);
    setFilterData(newFilterData);
    handleFilter(newFilterData);
  };
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <h4>City: </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button name="city" value="Varanasi" onClick={handleChange}>
            Varanasi
          </button>
          <button name="city" value="Jaunpur" onClick={handleChange}>
            Jaunpur
          </button>
          <button name="city" value="Ballia" onClick={handleChange}>
            Ballia
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <h4>Category: </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button name="category" value="one" onClick={handleChange}>
            one
          </button>
          <button name="category" value="two" onClick={handleChange}>
            two
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <h4>Type: </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button name="type" value="A" onClick={handleChange}>
            A
          </button>
          <button name="type" value="B" onClick={handleChange}>
            B
          </button>
          <button name="type" value="C" onClick={handleChange}>
            C
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <h4>City: </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button name="active" value="true" onClick={handleChange}>
            True
          </button>
          <button name="active" value="false" onClick={handleChange}>
            False
          </button>
        </div>
      </div>
      <div>
        <h4>Name: </h4>
        <input type='text' name='name' value={filterData.name} onChange={handleChange} />
      </div>
    </div>
  );
}

function Table({ fullData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Category</th>
          <th>Type</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {fullData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.category}</td>
            <td>{item.type}</td>
            <td>{item.active.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
