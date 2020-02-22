/**
 * Install:
 *   npm install aws-sdk
 *
 * Usage:
 *   node s3_utils.js  # for testing
 *
 *   // for programming
 *   const {S3Client} = require('./s3_utils.js');
 *   const client = S3Client('127.0.0.1:8000', 'accessKey1', 'verySecretKey1', {sslEnabled: false});
 *
 * */
const aws = require('aws-sdk');

// NOTE: only one instance is allowed at the same time
const create_s3_client = (url, access_key, secret_key, options) => {
    options = options || {};
    const s3 = new aws.S3({
        accessKeyId: access_key,
        secretAccessKey: secret_key,
        endpoint: url,
        s3ForcePathStyle: true,
        ...options
    });
    return s3;
};

const wrap_s3_func = (f, params) => {
    if (!params) {
        return new Promise((res, rej) => {
            f((err, resp) => {
                if (err) rej(err);
                else res(resp);
            });
        });
    } else {
        return new Promise((res, rej) => {
            f(params, (err, resp) => {
                if (err) rej(err);
                else res(resp);
            });
        });
    }
};

const put_object = (client, bucket, key, data) => {
    const params = {Bucket: bucket, Key: key, Body: data};
    return wrap_s3_func(client.putObject.bind(client), params);
};

const list_buckets = client => {
    return wrap_s3_func(client.listBuckets.bind(client)).then(r => r['Buckets']);
};

const create_bucket = (client, bucket) => {
    return wrap_s3_func(client.createBucket.bind(client), {Bucket: bucket});
};

const list_objects = (client, bucket) => {
    return wrap_s3_func(client.listObjects.bind(client), {Bucket: bucket}).then(r => r['Contents']);
};

const delete_object = (client, bucket, key) => {
    return wrap_s3_func(client.deleteObject.bind(client), {Bucket: bucket, Key: key});
};

const clear_bucket = async (client, bucket) => {
    const objects = await list_objects(client, bucket);
    for (let object of objects) {
        await delete_object(client, bucket, object.Key);
    }
    return objects;
};

const delete_bucket = (client, bucket) => {
    return wrap_s3_func(client.deleteBucket.bind(client), {Bucket: bucket});
};

// NOTE: only one instance is allowed at the same time
class S3Client {
    constructor(url, access_key, secret_key, options) {
        this.client = create_s3_client(url, access_key, secret_key, options);
        const functions = [
            create_bucket,
            list_buckets,
            delete_bucket,
            clear_bucket,
            put_object,
            list_objects,
            delete_object
        ];
        const arguments_to_list = args => {
            const args_ = [];
            for (let arg of args) {
                args_.push(arg);
            }
            return args_;
        };
        const that = this;
        functions.forEach(f => {
            that[f.name] = function () {
                return f(that.client, ...arguments_to_list(arguments));
            }
        });
    }
}

const test_s3_server = async (url, access_key, secret_key, options) => {
    client = new S3Client(url, access_key, secret_key, options);
    const bucket = 'abc';
    const key = 'key' + Math.random()
    try {
        await client.create_bucket(bucket);
    } catch(e) {}
    await client.list_buckets().then('list_buckets: ', r => console.log(r));
    await client.put_object(bucket, key, 'abcdef').then(r => console.log('put_object: ', r));
    await client.list_objects(bucket).then(r => console.log('list_objects: ', r));
    await client.delete_object(bucket, key).then(r => console.log('delete_object: ', r));
    await client.list_objects(bucket).then(r => console.log('list_objects: ', r));
    await client.clear_bucket(bucket).then(r => console.log('clear_bucket: ', r));
    await client.delete_bucket(bucket).then(r => console.log('delete_bucket: ', r)).catch(e => console.log(e));
};

const test_cloudserver = () => test_s3_server('127.0.0.1:8000', 'accessKey1', 'verySecretKey1', {sslEnabled: false});
const test_minio = () => test_s3_server('127.0.0.1:9000', 'minioadmin', 'minioadmin', {sslEnabled: false});

const test = async () => {
    await test_cloudserver();
    await test_minio();
};

module.exports = {
    S3Client
};

if (typeof require !== 'undefined' && require.main === module) {
    test()
}
