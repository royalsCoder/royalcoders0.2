import axios from "axios";

export const GetRequest = async (url) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}${url}`
  );
  return response;
};

export const PostRequest = async (props) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
    props?.cred
  );
  return response;
};

export const PutRequest = async (props) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
    props?.cred
  );
  return response;
};

export const PatchRequest = async (props) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
    props?.cred
  );
  return response;
};

export const DeleteRequest = async (url) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_BASE_URL}${url}`
  );
  return response;
};

export const fileUpload = async (props) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};