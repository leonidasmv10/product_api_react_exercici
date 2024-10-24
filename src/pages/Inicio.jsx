import BaseLayout from "../components/layouts/BaseLayout";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

import ProductController from "../controllers/ProductController";
import Table from "react-bootstrap/Table";

const Inicio = () => {
  const [products, setProducts] = useState([]);
  const productController = new ProductController();

  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);

  const handleAddProduct = () => {
    var name_element = document.getElementById("id_name");
    var name_value = name_element.value;

    var price_element = document.getElementById("id_price");
    var price_value = price_element.value;

    var description_element = document.getElementById("id_description");
    var description_value = description_element.value;

    const data = {
      name: name_value,
      price: price_value,
      description: description_value,
    };

    productController.add(data);
    toast.success("Producto agregado correctamente!");
    setShow(false);
  };

  const handleUpdateProductAction = () => {
    var id_element = document.getElementById("id_key");
    var id_value = id_element.value;

    console.log(id_value);

    var name_element = document.getElementById("id_name");
    var name_value = name_element.value;

    var price_element = document.getElementById("id_price");
    var price_value = price_element.value;

    var description_element = document.getElementById("id_description");
    var description_value = description_element.value;

    const data = {
      name: name_value,
      price: price_value,
      description: description_value,
    };

    productController.update(id_value, data);
    toast.success("Producto actualizado correctamente!");
    setShow(false);
  };

  async function handleUpdateProduct(id) {
    setIsUpdate(true);
    setShow(true);
    var product = await productController.getProduct(id);

    var id_element = document.getElementById("id_key");
    id_element.value = product.id;

    var name_element = document.getElementById("id_name");
    name_element.value = product.name;

    var price_element = document.getElementById("id_price");
    price_element.value = product.price;

    var description_element = document.getElementById("id_description");
    description_element.value = product.description;
  }

  async function handleDeleteProduct(id) {
    console.log(id);
    await productController.delete(id);
    toast.success("Producto eliminado correctamente!");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsList = await productController.get();
        setProducts(productsList);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [products]);

  return (
    <BaseLayout>
      <Button variant="primary" onClick={() => setShow(true)}>
        Agregar Producto
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>Producto</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="id_key"></div>
          <h5>Nombre: </h5>
          <input id="id_name" type="text"></input>
          <h5>Precio: </h5>
          <input id="id_price" type="number"></input>
          <h5>Descripción: </h5>
          <input id="id_description" type="text"></input>
          <br></br> <br></br>
          {isUpdate && (
            <>
              <button onClick={handleUpdateProductAction}>Actualizar</button>
            </>
          )}
          {!isUpdate && (
            <>
              <>
                <button onClick={handleAddProduct}>Agregar</button>
              </>
            </>
          )}
        </Modal.Body>
      </Modal>

      <h2>Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handleUpdateProduct(item.id)}>
                    Editar
                  </button>
                  <button onClick={() => handleDeleteProduct(item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </BaseLayout>
  );
};

export default Inicio;
