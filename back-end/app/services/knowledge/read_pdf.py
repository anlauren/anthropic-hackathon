"""
read_pdf.py
"""
import io
import asyncio
from PyPDF2 import PdfReader 


async def read_pdf(byte_stream):
    reader = PdfReader(byte_stream)
    number_of_pages = len(reader.pages)
    list_extracted_text = []
    for page_index in range(number_of_pages):
        page = reader.pages[page_index]
        text = page.extract_text()
        list_extracted_text.append(text)

    extracted_text = "\n\n".join(list_extracted_text)
    return extracted_text


async def async_process_pdf(bytes_array):
    data_stream = io.BytesIO(bytes_array)
    text_extracted = await read_pdf(data_stream)

    if text_extracted.isspace():
        raise Exception("PDF is empty - OCR is needed")
    else:
        return text_extracted