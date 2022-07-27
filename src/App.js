import logo from './logo.svg';
import './App.css';
import ContactsData from './contacts.json'
import React, {useState} from 'react';

function App() {

  const [contacts, useContacts ] = useState(ContactsData.slice(0, 5))
  
  
  // const [wonOscar, setWonOscar] = useState(true)
  // const [wonEmmy, setWonEmmy] = useState(true)

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
                <table>
                    <tr>
                      <td><img src = {elem.pictureUrl} alt={elem.name} className="profilepict" /></td>
                      <td>{elem.name}</td>
                      <td>{elem.popularity}</td>
                      <td></td>
                      <td></td>

         
                    </tr>
                </table>
           )
        })} 
    </div>  
    )
}
export default App;
