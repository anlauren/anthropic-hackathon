from fastapi import APIRouter
from app.api.routes.upload import JOBS

router = APIRouter()


@router.get("/status/{job_id}")
async def get_job_status(job_id: str):
    status = JOBS.get(job_id, None)
    if status:
        return {"job_id": job_id, "status": status}
    else:
        return {"error": "Invalid job_id or job not found!"}
