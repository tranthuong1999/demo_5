const BASE_URL = "https://fiverrnew.cybersoft.edu.vn/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M"

export const fetchWorkCategoyApi = async () => {
    try {
        const response = await fetch(`${BASE_URL}/cong-viec/lay-menu-loai-cong-viec`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'tokencybersoft': `${token}`,
            },
        });
        const result: any = await response.json();
        return result;
    }
    catch (error) {
        return error;
    }
}