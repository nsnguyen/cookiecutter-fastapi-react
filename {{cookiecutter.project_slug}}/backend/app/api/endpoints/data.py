from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import Dict, Any, List, Optional
from datetime import datetime

router = APIRouter()


class DataSubmission(BaseModel):
    name: str
    email: EmailStr
    message: str


class DataResponse(BaseModel):
    status: str
    message: str
    timestamp: datetime
    data: Optional[Dict[str, Any]] = None


@router.post("/submit", response_model=DataResponse)
async def submit_data(submission: DataSubmission):
    """
    Process submitted data
    """
    try:
        # In a real application, this would process or store the data
        # For now, we'll just echo it back
        return DataResponse(
            status="success",
            message="Data received successfully",
            timestamp=datetime.now(),
            data={
                "received": {
                    "name": submission.name,
                    "email": submission.email,
                    "message": submission.message
                }
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing data: {str(e)}")


@router.get("/", response_model=List[Dict[str, Any]])
async def get_data():
    """
    Retrieve sample data
    """
    try:
        # In a real application, this would fetch data from a database
        # For now, we'll return sample data
        return [
            {
                "id": 1,
                "name": "Sample Item 1",
                "description": "This is a sample item",
                "created_at": datetime.now().isoformat()
            },
            {
                "id": 2,
                "name": "Sample Item 2",
                "description": "This is another sample item",
                "created_at": datetime.now().isoformat()
            }
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
