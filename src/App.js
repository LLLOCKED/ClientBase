import {Stack} from 'react-bootstrap';
import ClientForm from "./components/ClientForm/ClientForm";
import {useState} from "react";
import ClientList from "./components/ClientList/ClientList";

const App = () => {

    const [clients, setClients] = useState([
        {id: 1, email: 'vlad@gmail.com', name: 'Vlad', product: 'apple', price: 100, date: new Date().toLocaleString()}
    ]);

    const handleSetClient = (value) =>{
        setClients([...clients, value]);
        console.log(clients)
    }

    return (
        <Stack gap={5}>
            <ClientForm handleSetClient={handleSetClient} />
            <ClientList clients={clients}  />
        </Stack>
    );
}

export default App;
