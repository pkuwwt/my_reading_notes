import re
from functools import wraps
import boto3

def create_s3_client(url, access_key, secret_key):
    return boto3.client('s3',
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
        endpoint_url = url 
        )


def _get_status_code(resp):
    return resp['ResponseMetadata']['HTTPStatusCode']

def create_bucket(client, bucket_name):
    try:
        return client.create_bucket(Bucket=bucket_name)
    except Exception as e:
        print(e)
        return None

def clear_bucket(client, bucket_name):
    objects = list_objects(client, bucket_name)
    for obj in objects:
        key = obj['Key']
        delete_object(client, bucket_name, key)
    return objects

def delete_bucket(client, bucket_name):
    try:
        return client.delete_bucket(Bucket=bucket_name)
    except Exception as e:
        print(e)
        return None

def list_buckets(client):
    resp = client.list_buckets()
    return resp.get('Buckets', [])

def list_objects(client, bucket_name):
    resp = client.list_objects(Bucket=bucket_name)
    return resp.get('Contents', [])

def put_object(client, bucket_name, key, binary_data):
    return client.put_object(Bucket=bucket_name, Key=key, Body=binary_data)

def get_object(client, bucket_name, key):
    return client.get_object(Bucket=bucket_name, Key=key)

def get_object_body(client, bucket_name, key):
    '''
    s3://bucket_name/key => bytes
    '''
    return client.get_object(Bucket=bucket_name, Key=key)['Body'].read()

def delete_object(client, bucket_name, key):
    '''
    s3://bucket_name/key => bool
    '''
    resp = client.delete_object(Bucket=bucket_name, Key=key)
    return resp and _get_status_code(resp) < 300

def upload_file(client, bucket_name, filename):
    key = re.sub(r'\.', '', filename)
    if key[0] == '/':
        key = key[1:]
    client.upload_file(Bucket=bucket_name, Key=key, Filename=filename)
    return key

class S3Client:
    def __init__(self, url, access_key, secret_key):
        def wrap(f):
            @wraps(f)
            def wrapped(*args, **kwargs):
                return f(self.client, *args, **kwargs)
            return wrapped
        functions = [
                create_bucket,
                clear_bucket,
                delete_bucket,
                list_buckets,
                list_objects,
                put_object,
                get_object,
                get_object_body,
                delete_object,
                upload_file
                ]
        self.__dict__ = {}
        for f in functions:
            self.__dict__[f.__name__] = wrap(f)
        self.url = url
        self.access_key = access_key
        self.secret_key = secret_key
        self.client = create_s3_client(url, access_key, secret_key)

def test_s3_server(url, access_key, secret_key):
    s3 = S3Client(url, access_key, secret_key)
    bucket = 'abc'
    print(s3.create_bucket(bucket))
    print(s3.put_object(bucket, 'aaa.dat', bytes([1,2])))
    print(s3.list_buckets())
    print(s3.list_objects(bucket))
    print(s3.get_object_body(bucket, 'aaa.dat'))
    key = s3.upload_file(bucket, './s3_utils.py')
    print(s3.delete_object(bucket, key))
    print(s3.delete_bucket(bucket))
    print(s3.clear_bucket(bucket))
    print(s3.delete_bucket(bucket))

def test_minio():
    '''
    docker pull minio/minio
    docker run -p 9000:9000 minio/minio server /data
    '''
    test_s3_server('http://localhost:9000', 'minioadmin', 'minioadmin')

def test_cloudserver():
    '''
    git clone https://github.com/scality/S3.git
    cd S3
    yarn install --frozen-lock-file
    yarn start

    or

    docker pull zenko/cloudserver
    docker run -p 8000:8000 -e S3BACKEND=mem zenko/cloudserver
    '''
    test_s3_server('http://localhost:8000', 'accessKey1', 'verySecretKey1')

if __name__ == '__main__':
    test_minio()
    test_cloudserver()

