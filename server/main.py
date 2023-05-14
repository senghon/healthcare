# server_a.py
import httpx
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/request_to_b")
async def request_to_b():
    async with httpx.AsyncClient() as client:
        response = await client.get("http://172.30.1.95:8010/response")
    return response.json()

@app.get("/request_table_count")
async def request_table_count():
    async with httpx.AsyncClient() as client:
        response = await client.get("http://172.30.1.95:8010/get_table_count")
    return response.json()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
