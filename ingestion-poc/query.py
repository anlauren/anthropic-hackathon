import pinecone
import os
import openai

from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings

from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
RESOURCE_ENDPOINT = os.getenv("OPENAI_API_BASE")

openai.api_type = "azure"
openai.api_version = "2022-12-01"
openai.api_key = API_KEY
openai.api_base = RESOURCE_ENDPOINT 

INDEX_NAME = "hackaton-anthropic"

text_field = "text"



EMBEDDINGS_MODEL = "text-embedding-ada-002"
import pdb; pdb.set_trace()

# switch back to normal index for langchain
pinecone.init(api_key=os.getenv("PINECONE_API_KEY"),
                environment=os.getenv("PINECONE_ENV")
                  )
index = pinecone.Index(INDEX_NAME)
print(index.describe_index_stats())

embeddings = OpenAIEmbeddings(deployment_id=EMBEDDINGS_MODEL, 
                                chunk_size=1,
                                openai_api_key=API_KEY,
                                openai_api_base=RESOURCE_ENDPOINT
                                )

vectorstore = Pinecone(index, embeddings.embed_query, text_field)
query = "What is the name of the period between 3000 B.C. and 1200 B.C. when bronze became widely used?"

docs = vectorstore.similarity_search(query)
print(docs[0].page_content)
