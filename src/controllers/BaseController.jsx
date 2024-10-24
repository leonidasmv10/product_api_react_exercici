class BaseController {
  constructor(path) {
    this.url = `${import.meta.env.VITE_API}/${path}`;
  }

  async add(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(this.url, options);
      const result = await response.json();
      console.log("id: ", result.Id);
    } catch (e) {
      console.error("Error al agregar:", e);
    }
  }

  async update(id, data) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(this.url + "/" + id, options);
      const result = await response.json();
      console.log("id: ", result.Id);
    } catch (e) {
      console.error("Error al agregar:", e);
    }
  }

  async get() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(this.url, options);
      const result = await response.json();
      return result || [];
    } catch (e) {
      console.error("Error al obtener datos:", e);
      return [];
    }
  }

  async getProduct(id) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(this.url + "/" + id, options);
      const result = await response.json();
      return result || [];
    } catch (e) {
      console.error("Error al obtener datos:", e);
      return [];
    }
  }

  async delete(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(this.url + "/" + id, options);
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.error("Error al eliminar:", e);
    }
  }
}

export default BaseController;
