import pinecone
import os

from langchain.vectorstores import Pinecone
from langchain.embeddings import OpenAIEmbeddings

from dotenv import load_dotenv

load_dotenv()

INDEX_NAME = "hackaton-anthropic"

text_field = "text"

API_KEY = os.getenv("OPENAI_API_KEY")
RESOURCE_ENDPOINT = os.getenv("OPENAI_API_BASE")

EMBEDDINGS_MODEL = "text-embedding-ada-002"
import pdb; pdb.set_trace()

# switch back to normal index for langchain
index = pinecone.Index(INDEX_NAME)

embeddings = OpenAIEmbeddings(deployment_id=EMBEDDINGS_MODEL, 
                                chunk_size=1,
                                openai_api_key=API_KEY,
                                openai_api_base=RESOURCE_ENDPOINT)

vectorstore = Pinecone(index, embeddings.embed_query, text_field)
query = "What is the name of the period between 3000 B.C. and 1200 B.C. when bronze became widely used?"

docs = vectorstore.similarity_search(query)
print(docs[0].page_content)
