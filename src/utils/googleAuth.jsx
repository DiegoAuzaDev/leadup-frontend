import { API_URL, DASHBOARD_URL } from "../utils/keys";
const googleAuth = async () => {
    const googleAuthRequest = `${API_URL}/auth/google?redirect_url=${DASHBOARD_URL}`
    location.href = googleAuthRequest

};

export default googleAuth;
