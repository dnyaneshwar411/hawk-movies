const URL = import.meta.env.VITE_BACKEND_URL;

export async function retrieve(endpoint) {
  try {
    const response = await fetch(`${URL}/api/${endpoint}`, {
      credentials: "include"
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.payload);

    return { success: true, payload: data };
  } catch (error) {
    return { success: false }
  }
}

export async function send(endpoint, information = {}) {
  try {
    const response = await fetch(`${URL}/api/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
      credentials: "include"
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.payload);

    return { success: true, payload: data };
  } catch (error) {
    return { success: false, payload: error.message };
  }
}