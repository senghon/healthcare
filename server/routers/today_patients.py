from fastapi import APIRouter
from sqlalchemy import create_engine, text

#db 한글 깨질때 : .encode('ISO-8859-1').decode('cp949')


# DB 연결 설정
login_dta = {
    'server': '121.130.224.129',
    'port': '1433',
    'database': 'efMain',
    'username': 'senghon',
    'password': 'yy5625'
}
engine = create_engine(f"mssql+pymssql://{login_dta['username']}:{login_dta['password']}@{login_dta['server']}:{login_dta['port']}/{login_dta['database']}")

router = APIRouter (prefix='/api/today_patients')

def find_xid(ptxid):
    with engine.connect() as conn:
        query = text(f"""
            SELECT sxdesc FROM dbo.sx WHERE sxid = '{ptxid}'
        """)
        result = conn.execute(query)
        row = result.fetchone()
        if row:
            return row[0].encode('ISO-8859-1').decode('cp949').strip()
        else:
            return None

def find_clid(ptclid):
    with engine.connect() as conn:
        query = text(f"""
            SELECT cllname
            FROM dbo.cl
            WHERE clid = '{ptclid}'
        """)
        result = conn.execute(query)
        row = result.fetchone()
        if row:
            return row[0].encode('ISO-8859-1').decode('cp949')
        else:
            return None

def find_brid(ptbrid):
    with engine.connect() as conn:
        query = text(f"""
            SELECT brdesc,brspid
            FROM dbo.br
            WHERE brid = '{ptbrid}'
        """)
        result = conn.execute(query)
        row = result.fetchone()
        if row:
            return [row[0].encode('ISO-8859-1').decode('cp949'),row[1]]
        else:
            return None

def find_staf(hplstf) :
    with engine.connect() as conn:
        query = text(f"""
            SELECT emname
            FROM dbo.em
            WHERE emcode = '{hplstf}'
        """)
        result = conn.execute(query)
        row = result.fetchone()
        if row:
            return row[0].encode('ISO-8859-1').decode('cp949')
        else:
            return None

@router.get('/')
def today_patients_list():
    with engine.connect() as conn:
        # dbo.hpl에서 hplptid, hplrdt 추출
        query1 = text("""
            SELECT hplptid,hplrdt,hplstf FROM dbo.hpl
            WHERE CONVERT(date, hplrdt) = '2022-06-20' AND hplplid = 12000
        """)
        result1 = conn.execute(query1)
        rows1 = result1.fetchall()

        # dbo.pt에서 ptid, ptname, ptsxid, ptclid, ptbrid 추출
        pt_info = []
        for row in rows1:
            query2 = text(f"""
                SELECT ptid, ptname, ptsxid, ptclid, ptbrid
                FROM dbo.pt
                WHERE ptid = '{row[0]}'
            """)
            result2 = conn.execute(query2)
            row2 = result2.fetchone()
            pt_info.append({
                "ptid": row2[0],
                "ptname": row2[1].encode('ISO-8859-1').decode('cp949').strip(),
                "ptsxid": find_xid(row2[2]),
                "ptclid": find_clid(row2[3]),
                "ptbrid": find_brid(row2[4]),
                "hplrdt": str(row[1]),
                "emname":find_staf(row[2]) # datetime 객체를 str로 변환
            })

        return pt_info