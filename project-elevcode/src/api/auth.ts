// api/auth.ts

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch("https://fakeapi.platzi.com/en/rest/auth-jwt/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
};
