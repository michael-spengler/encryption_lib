import { Caesar } from "https://deno.land/x/encryption_lib@0.1.4/mod.ts"

const caesar_enc_text = "Hello World!"
const cipher = 5

//Caesar.CaesarEncoding
const caesar_encoded = Caesar.CaesarEncoding(caesar_enc_text,cipher)
console.log(caesar_encoded) // "Mjqqt Btwqi!"

const caesar_dec_text = "Mjqqt Btwqi!"

//Caesar.CaesarDecoding
const caesar_decoded = Caesar.CaesarDecoding(caesar_dec_text,cipher)
console.log(caesar_decoded) // "Hello World!"
