"""
knowledge.service.py
"""

import openai
import os
import pinecone
import requests

from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import MarkdownHeaderTextSplitter

from dotenv import load_dotenv

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
    # index.delete(delete_all=True, namespace='')

    docsearch = Pinecone.from_documents(documents, embeddings, index_name=INDEX_NAME)
    return 


def split_documents(document: str):
    """
    Split documents to be uploaded to the DB
    """
    print(document)
    print()
    # Splitter
    headers_to_split_on = [
    ("#", "Title"),
    ("##", "Subtitle")
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)
    
    # Split each documents in chunks 
    list_documents = markdown_splitter.split_text(document)
    return list_documents


class KnowledgeService:

    def ingest_knowledge(self, knowledge: str):
        """
        Ingest documents to the vector DB
        """

        # Upload documents
        list_documents = split_documents(knowledge)
        try:
            upload_documents_to_vector_db(list_documents)  
            return {'message': 'success'}
        except:
            return {'message': 'error'}