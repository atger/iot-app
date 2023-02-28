import axios from "axios"

const BASE_URL = "http://139.144.5.107/api";
const LEVEL = "/level";

export const getLevel = async () => {
	const res = await axios.get(BASE_URL+LEVEL);
	return res.data
}
