import { API_URL } from "../../utils/constants"

const DEFAULT_METHOD = 'GET'

async function Fetch(endpointName: string, method = DEFAULT_METHOD, body = null) {

  const config = {
    method,
    headers: {
      'Authorization': ``,
      'Content-Type': 'application/json'
    },
    body
  }
  try {
    const response = await fetch(`${API_URL}${endpointName}`, config)
    const data = response.json()
    if (data) return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export { Fetch };