"""
ingestion.py
"""

import openai
import requests
import time
import tiktoken
import argparse
import os
import pinecone

from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import MarkdownHeaderTextSplitter
from langchain.document_loaders import UnstructuredMarkdownLoader

from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
RESOURCE_ENDPOINT = os.getenv("OPENAI_API_BASE")

TOKENIZER = tiktoken.get_encoding('p50k_base')
INDEX_NAME = "hackaton-anthropic"


def parse():
    """
    Parser arguments
    """
    parser = argparse.ArgumentParser()

    # Data 
    parser.add_argument("--input_dir", type=str, default="data/example.md")
    parser.add_argument("--vector_db_dir", type=str, default="vector_db")

    # Model
    parser.add_argument("--embeddings_model", type=str, default="text-embedding-ada-002")

    
    return parser.parse_args()


def test_openai_connection():
    """Test connection"""

    url = openai.api_base + "/openai/deployments?api-version=2022-12-01"
    r = requests.get(url, headers={"api-key": API_KEY})
    print(r.text)
    return 


def tiktoken_len(text: str):
    """
    Get the number of tokens of a text using a tokenizer
    """
    tokens = TOKENIZER.encode(
        text,
        disallowed_special=()
    )
    return len(tokens)


def upload_documents_to_vector_db(documents, embeddings_model, vector_db_dir):
    """
    Up:load documents in batches
    :param documents: List of documents
    :param embeddings_model: name of embeddings deployment 
    :param vector_db_dir: vector database directory
    """
    
    print("\nStart uploading documents")
    
    # Initialise Chroma DB and documents uploading
    embeddings = OpenAIEmbeddings(deployment_id=embeddings_model, 
                                  chunk_size=1,
                                  openai_api_key=API_KEY,
                                  openai_api_base=RESOURCE_ENDPOINT)

    # Instantiate Pinecone client
    pinecone.init(api_key=os.getenv("PINECONE_API_KEY"),
                  environment=os.getenv("PINECONE_ENV")
                  )
    docsearch = Pinecone.from_documents(documents, embeddings, index_name=INDEX_NAME)
    print('finish')
    return 


def split_documents(documents_dir: str):
    """
    Split documents to be uploaded to the DB
    """
    
    # Splitter
    headers_to_split_on = [
    ("#", "Title"),
    ("##", "Subtitle")
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)
    
    # Loader
    with open(documents_dir, 'r', encoding='utf-8') as file:
        document = file.read()

    
    # Split each documents in chunks 
    list_documents = markdown_splitter.split_text(document)
    return list_documents


def main():
    """
    Main function
    :return:
    """
    # Get arguments
    args = parse()

    # Validate openAI azure
    openai.api_type = "azure"
    openai.api_version = "2022-12-01"
    openai.api_key = API_KEY
    openai.api_base = RESOURCE_ENDPOINT 
    test_openai_connection()
    import pdb; pdb.set_trace()
    
    # Upload documents
    list_documents = split_documents(args.input_dir)
    upload_documents_to_vector_db(list_documents, args.embeddings_model, args.vector_db_dir)  

    print('finish')


if __name__ == "__main__":
    main()

