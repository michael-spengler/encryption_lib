import { RSA } from "https://deno.land/x/encryption_lib@0.1.4/mod.ts"

// RSA.KeyGenrerator (generates a random public and private keypair)
const rsa_keys = RSA.KeyGenerator()
console.log(rsa_keys) // [[3,1219],[763,1219]]

const rsa_enc_text = "Hello World"
const rsa_public_key = [3,1219]

// RSA.Encoding
const rsa_encoded = RSA.Encoding(rsa_enc_text,rsa_public_key)
console.log(rsa_encoded) // [234,246,485,485,1132,1074,243,1132,459,485,420]

const rsa_dec_list = [234,246,485,485,1132,1074,243,1132,459,485,420]
const rsa_private_key = [763,1219]

//RSA.Decoding
const rsa_decoded = RSA.Decoding(rsa_dec_list,rsa_private_key)
console.log(rsa_decoded) // "Hello World"
