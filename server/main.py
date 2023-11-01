# server_a.py
import httpx
from fastapi import FastAPI

app = FastAPI()

# 집 컴퓨터 ip
mycomip = '121.130.224.129:8011'
# 병원 컴퓨터 ip
hospitalip = '172.30.1.104:8011'

#ngrok
ngrok = 'magical-warthog-direct.ngrok-free.app' 

# main 접속시 오늘의 환자 목록 loading
@app.get("/request_today_patient/{date}")
async def request_to_b(date):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://{ngrok}/today_patients_list/{date}")
    return response.json()

# 환자 클릭시 오늘의 개별 환자 정보 get
@app.get('/patient/{patient_id}/{vsid}')
async def request_patient_information(patient_id,vsid):
    async with httpx.AsyncClient() as client :
        response = await client.get(f"https://{ngrok}/{patient_id}/{vsid}")
    return response.json()

# 이전 검사 환자 목록 loading


