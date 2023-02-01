type Ted = {
    id: string,
    tedshow: string,
    tedtitle: string,
    tedinfo: string
}
const API_URL = '/api/detail'
async function getTed(pid: string): Promise<Ted> {
    const res = await fetch(API_URL + `/${pid}`)
    return res.json()
} 

export const useTed = () => {
    
}