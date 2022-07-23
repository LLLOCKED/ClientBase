import {Form, Button, Stack, Modal} from 'react-bootstrap';
import {useState} from "react";

const ModalError = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Помилка</Modal.Title>
            </Modal.Header>
            <Modal.Body>Перекойтесь що всі поля заповнені та ціна більше нуля!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Добре
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const ClientForm = ({handleSetClient}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleChangeName = (e) => {
        setName(e.target.value)
    };

    const handleChangeProduct = (e) => {
        setProduct(e.target.value)
    };

    const handleChangePrice = (e) => {
        setPrice(Number(e.target.value));
    };

    const handleClickForm = (e) => {
        e.preventDefault();
        if(email && name && product && price>0){
            handleSetClient({ id: Date.now(), email, name, product, price, date: new Date().toLocaleString() });
            setShow(false)
        }else {
            setShow(true);
        }

    }

    return (
        <Stack className="bg-light col-md-6 mx-auto px-3 py-3 mt-3 rounded">
            <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={handleChangeEmail} type="email" placeholder="Enter email"/>
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={handleChangeName} type="text" placeholder="Name"/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicProduct">
                        <Form.Label>Product</Form.Label>
                        <Form.Control value={product} onChange={handleChangeProduct} type="text" placeholder="Product"/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={price} onChange={handleChangePrice} type="number" placeholder="Price"/>
                    </Form.Group>
                </Stack>

                <Button onClick={handleClickForm} variant="dark" type="submit">
                    Submit
                </Button>
                <ModalError show={show} handleClose={handleClose} />
            </Form>
        </Stack>
    );
}

export default ClientForm;
