

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
const Dashboard = ({ product, updateProduct, deleteProduct, user }) => {
    const [products, setProducts] = useState(product);
    const [editedProduct, setEditedProduct] = useState(null);
    const [userId, setUserId] = useState(user.id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
            const response = await axios.get('http://localhost:3000/api/product');
            const userProducts = response.data.filter(product => product.userId === userId);
            setProducts(userProducts);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [isLoading]);

    const handleEdit = (productId) => {
        openModal(productId);
    };

    const handleDelete = (productId) => {
        deleteProduct(productId);
        setIsLoading(true); // Trigger re-fetching of products
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(editedProduct.id, editedProduct);
            setIsModalOpen(false);
            setIsLoading(true); // Trigger re-fetching of products
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e, key) => {
        const value = e.target.value;
        setEditedProduct(prevState => ({
            ...prevState,
            [key]: value
        }));
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
                        <TableHeader>Quantity</TableHeader> {/* Added Quantity header */}
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
                            <TableCell>{product.quantity}</TableCell>
                            </TableCell>
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
                        <Form onSubmit={handleFormSubmit}>
                            <FormField>
                                <FormLabel>Name</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.name}
                                    onChange={(e) => handleInputChange(e, 'name')}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Price</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.price}
                                    onChange={(e) => handleInputChange(e, 'price')}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Description</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.description}
                                    onChange={(e) => handleInputChange(e, 'description')}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Color</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.color}
                                    onChange={(e) => handleInputChange(e, 'color')}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Sizes</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.sizes}
                                    onChange={(e) => handleInputChange(e, 'sizes')}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Image</FormLabel>
                                <FormInput
                                    type="text"
                                    value={editedProduct.image}
                                    onChange={(e) => handleInputChange(e, 'image')}
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>Quantity</FormLabel> {/* Added Quantity field */}
                                <FormInput
                                    type="number"
                                    value={editedProduct.quantity}
                                    onChange={(e) => handleInputChange(e, 'quantity')}
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