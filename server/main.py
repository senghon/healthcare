from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routers.today_patients import router as today_patients

#서버실행 명령어 : uvicorn main:app --reload
app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
app.include_router(today_patients)