let Czr = require("../src/index.js");

//TODO 创建账号
// Czr.accounts.create(2222).then(res => {
//     console.log("创建账号收到结果\n", res);
// }).catch(err => {
//     console.log(err);
// });

//TODO 解密账号私钥 9E91AC7B6E32AEB68A1AA5ECA5CBE24481B412CC129E15A0102D3A6003D2BA0A
let keyStore = {
    account: "czr_3vWdWYrTYVhhrJKoRaYESnUgdJCTLPPB9ZyWrgMDiVh1VbaiBM",
    kdf_salt: "10EEBA15619E42B95419CDA115DE5DC85141B0E8474DACCADB7DE81874A96C60",
    iv: "E1EDE18DEBF5DEFEEE94F42FCF81EAF6",
    ciphertext: "E39941F5638206C3E7BFB5340635C2717AEF1DC1349F61D218ABA65E1C2FECC9"
};
Czr.accounts.decrypt(keyStore,2222).then(res=>{
    console.log("解密账号收到结果 ",res);
    return res
}).catch(err=>{
    console.log("decrypt err",err);
}).then(function (privateKey) {
    //TODO 签名
    let blockHash='5E844EE4D2E26920F8B0C4B7846929057CFCE48BF40BA269B173648999630053';
    Czr.accounts.sign(blockHash,privateKey).then(signature=>{
        //BBFE4DE008DE19C3178EABBAAF032319DDC493AE5E9174065A0E729945BA47CA9CAC6B6F5A509D8123FB1F4A62AD65D4B68E51A863E4BA7033696A89E1FD9C07
        console.log("signature ",signature)
    }).catch(err=>{
        console.log("sign err",err);
    })
});