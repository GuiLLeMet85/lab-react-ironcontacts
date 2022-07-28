import logo from './logo.svg';
import './App.css';
import ContactsData from './contacts.json'
import React, {useState} from 'react';

function App() {

  const [contacts, useContacts ] = useState(ContactsData.slice(0, 5))
  

    return (
    <div className='App'>
      <h1>IronContacts</h1>
      <table>
            <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>Won an Oscar</th>
                      <th>Won an Emmy</th>
            </tr>
          </table>  
          {contacts.map (elem => {
              return (
                <table key={elem.id}>
                    <tr>
                      <td><img src = {elem.pictureUrl} alt={elem.name} className="profilepict" /></td>
                      <td>{elem.name}</td>
                      <td>{parseFloat(elem.popularity).toFixed(2)}</td>
                      <td>{elem.wonOscar ? <tl>🏆</tl> : null}</td>
                      <td>{elem.wonEmmy ? <tl>🏆</tl> : null}</td>
                    </tr>
                </table>
           )
        })} 
    </div>  
    )
}
export default App;
