// api/cep.ts

export const fetchCepInfo = async (cep: string) => {
    try {
      const response = await fetch(`https://brasilaberto.com/api/cep/v1/${cep}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("CEP not found");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch CEP information.");
    }
  };
  