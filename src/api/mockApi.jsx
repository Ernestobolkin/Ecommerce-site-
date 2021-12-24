import axios from "axios";

const mokeApi = axios.create({
  baseURL: "https://61c45fc3f1af4a0017d994e7.mockapi.io/shop",
});

export class MoackApi {
  static getUsersData = async () => {
  const {data} = await mokeApi.get("")
  return data
  }
}
