import logo from './logo.svg';
import './App.css';
import ContactsData from './contacts.json'
import React, {useState} from 'react';

function App() {

  const showFirstFiveContacts = [...ContactsData].slice(0, 5);
  const [contacts, setContacts] = useState(showFirstFiveContacts)
  const lastContacts = ContactsData.slice(5);

  const addRandomContact = () => {
        let randomContact = lastContacts[Math.floor(Math.random() * lastContacts.length)];
        const arrContacts = [...contacts]
        arrContacts.push(randomContact)
        setContacts(arrContacts)
  } 


  const sortByName = () => {
        let filterByName = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
        setContacts(filterByName);
  }

  const sortByPopularity = () => {
        let filterByPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity);
        setContacts(filterByPopularity);
  }


    return (
    <div className='App'>
      <h1>IronContacts</h1>
      <div className='section-bt'>
      <buttton onClick={addRandomContact} className="action-bt-green bt-contacts">Add Random Contact</buttton>
      <buttton onClick={sortByName} className="action-bt-blue bt-contacts">Sort by name</buttton>
      <buttton onClick={sortByPopularity} className="action-bt-grey bt-contacts">Sort by popularity</buttton>

      </div>
      <table className='header-table'>
            <tr>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>Won an Oscar</th>
                      <th>Won an Emmy</th>
            </tr>
          </table>  
          <div className='main-table'>
              {contacts.map (elem => {
                  return (
                      <table>
                          <tr>
                            <td><img src = {elem.pictureUrl} alt={elem.name} className="profilepict" /></td>
                            <td>{elem.name}</td>
                            <td>{parseFloat(elem.popularity).toFixed(2)}</td>
                            <td>{elem.wonOscar ? "🏆" : null}</td>
                            <td>{elem.wonEmmy ? "🌟" : null}</td>
                          </tr>
                      </table>
                  )
            })} 
         </div>
    </div>  
    )
}
export default App;
