export const fetchCryptoAPI = async (url) => {
  let fetchOptions = {};

  fetchOptions = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      let error = new Error(response.statusText);
      throw error;
    } else {
      const json = await response.json();
      return json;
    }
  } catch (err) {
    return err;
  }
};
