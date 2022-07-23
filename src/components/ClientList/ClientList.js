import {Stack, Table} from 'react-bootstrap';

const ClientList = ({clients}) => {
    return (
        <Stack className="bg-light col-md-6 mx-auto px-3 py-3 rounded">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.email}</td>
                        <td>{client.name}</td>
                        <td>{client.product}</td>
                        <td>{client.price} грн</td>
                        <td>{client.date}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Stack>
    );
}

export default ClientList;
