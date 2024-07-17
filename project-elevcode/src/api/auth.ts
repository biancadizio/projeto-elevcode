export const login = async (email: string, password: string) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};
