import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Dashboard = ({ product }) => {
    const [products, setProducts] = useState(product);
    const [editedProduct, setEditedProduct] = useState(null); // State variable to track the edited product
    const [isModalOpen, setIsModalOpen] = useState(false); // State variable to track the modal open/close

    const DashboardContainer = styled.div`
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    `;

    const Title = styled.h1`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    `;

    const Table = styled.table`
        width: 100%;
        border-collapse: collapse;
    `;

    const TableHead = styled.thead`
        background-color: #f2f2f2;
    `;

    const TableHeader = styled.th`
        padding: 10px;
        text-align: left;
    `;

    const TableBody = styled.tbody``;

    const TableRow = styled.tr`
        &:nth-child(even) {
            background-color: #f9f9f9;
        }
    `;

    const TableCell = styled.td`
        padding: 10px;
    `;

    const Button = styled.button`
        padding: 8px 16px;
        border: none;
        background-color: #007bff;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    `;

    const FormContainer = styled.div`
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #ccc;
    `;

    const FormTitle = styled.h2`
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    `;

    const Form = styled.form``;

    const FormField = styled.div`
        margin-bottom: 10px;
    `;

    const FormLabel = styled.label`
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    `;

    const FormInput = styled.input`
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    `;

    const ModalOverlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const ModalContent = styled.div`
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    `;

    const closeModal = () => {
        setIsModalOpen(false);
        setEditedProduct(null);
    };

    const openModal = (productId) => {
        const editedProduct = products.find((product) => product.id === productId);
        setEditedProduct(editedProduct);
        setIsModalOpen(true);
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEdit = (productId) => {
        openModal(productId);
    };

    const handleDelete = (productId) => {
        // Handle delete logic here
    };

    const handleHide = () => {
        setIsModalOpen(true);
    };

    const handleFormSubmit = (formData) => {
        // Handle form submission logic here
    };

    return (
        <DashboardContainer>
            <Title>Seller Dashboard</Title>
        
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Image</TableHeader>
                        <TableHeader>Price</TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>
                                <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                            </TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <Button className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={() => handleEdit(product.id)}>Edit</Button>
                                <Button className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={() => handleDelete(product.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {editedProduct && isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <FormTitle>Edit Product</FormTitle>
                        <Form>
                            <FormField>
                                <FormLabel>Name</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.name}
                                    onChange={(e) => {
                                        const updatedProduct = { ...editedProduct };
                                        updatedProduct.name = e.target.value;
                                        setEditedProduct(updatedProduct);
                                    }}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Price</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.price}
                                    onChange={(e) => {
                                        const updatedProduct = { ...editedProduct };
                                        updatedProduct.price = e.target.value;
                                        setEditedProduct(updatedProduct);
                                    }}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Description</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.description}
                                    onChange={(e) => {
                                        const updatedProduct = { ...editedProduct };
                                        updatedProduct.description = e.target.value;
                                        setEditedProduct(updatedProduct);
                                    }}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Color</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.color}
                                    onChange={(e) => {
                                        const updatedProduct = { ...editedProduct };
                                        updatedProduct.color = e.target.value;
                                        setEditedProduct(updatedProduct);
                                    }}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Sizes</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.sizes}
                                    onChange={(e) => {
                                        const updatedProduct = { ...editedProduct };
                                        updatedProduct.sizes = e.target.value;
                                        setEditedProduct(updatedProduct);
                                    }}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Image</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.image}
                                    onChange={(e) => {
                                        const updatedProduct = { ...editedProduct };
                                        updatedProduct.image = e.target.value;
                                        setEditedProduct(updatedProduct);
                                    }}
                                />
                            </FormField>
                            <Button type="submit" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }}>Save</Button>
                            <Button onClick={closeModal} className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }}>Cancel</Button>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
