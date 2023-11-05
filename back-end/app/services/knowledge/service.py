"""
knowledge.service.py
"""

import openai
import os
import pinecone

from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import MarkdownHeaderTextSplitter, TokenTextSplitter
from langchain.docstore.document import Document

from dotenv import load_dotenv
from typing import BinaryIO

from app.services.knowledge.read_pdf import async_process_pdf

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
RESOURCE_ENDPOINT = os.getenv("OPENAI_API_BASE")

INDEX_NAME = "hackaton-anthropic"
EMBEDDINGS_MODEL = "text-embedding-ada-002"

# Validate openAI azure
openai.api_type = "azure"
openai.api_version = "2022-12-01"
openai.api_key = API_KEY
openai.api_base = RESOURCE_ENDPOINT

# Instantiate Pinecone client
pinecone.init(api_key=os.getenv("PINECONE_API_KEY"), environment=os.getenv("PINECONE_ENV"))


def upload_documents_to_vector_db(documents):
    """
    Up:load documents in batches
    :param documents: List of documents
    """
    
    print("\nStart uploading documents")
    
    # Initialise Chroma DB and documents uploading
    embeddings = OpenAIEmbeddings(deployment_id=EMBEDDINGS_MODEL, 
                                  chunk_size=1,
                                  openai_api_key=API_KEY,
                                  openai_api_base=RESOURCE_ENDPOINT)
    
    index = pinecone.Index(INDEX_NAME)
    index.delete(delete_all=True, namespace='')

    docsearch = Pinecone.from_documents(documents, embeddings, index_name=INDEX_NAME)
    return 


def split_documents_md(document: str):
    """
    Split documents to be uploaded to the DB
    """
    # Splitter
    headers_to_split_on = [
    ("#", "Title"),
    ("##", "Subtitle")
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)
    
    # Split each documents in chunks 
    list_documents = markdown_splitter.split_text(document)
    return list_documents

def split_documents_pdf(document: str):
    """
    Split documents to be uploaded to the DB
    """
    # Splitter
    text_splitter = TokenTextSplitter(chunk_size=2000, chunk_overlap=50)
    
    # Split each documents in chunks 
    list_texts = text_splitter.split_text(document)
    list_documents = [Document(page_content=text, metadata={'file_type': 'pdf'}) for text in list_texts]
    return list_documents


class KnowledgeService:

    async def ingest_knowledge(self, knowledge_binary: BinaryIO, filename: str):
        """
        Ingest documents to the vector DB
        """
        if filename.endswith(".md"):
            list_documents = self.read_knowledge_base_md(knowledge_binary)
        elif filename.endswith(".pdf"):
            list_documents = await self.read_knowledge_base_pdf(knowledge_binary)
        else:
            raise Exception("File type not supported")
        
        try:
            upload_documents_to_vector_db(list_documents)  
            return {'message': 'success'}
        except:
            return {'message': 'error'}
        
    async def read_knowledge_base_pdf(self, knowledge: BinaryIO) -> str:

        file_bytes = knowledge.read()
        knowledge_string = await async_process_pdf(file_bytes)
        print(knowledge_string[:1000])
        list_documents = split_documents_pdf(knowledge_string)
        print(len(list_documents))

        return list_documents

    def read_knowledge_base_md(self, knowledge: BinaryIO) -> str:
        """
        Read the knowledge base from the vector DB
        """
        # Read the contents of the file
        knowledge_contents = knowledge.read()
        knowledge_string = knowledge_contents.decode("utf-8")

        list_documents = split_documents_md(knowledge_string)
        return list_documents
        