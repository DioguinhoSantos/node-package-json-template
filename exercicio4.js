const result = Number(process.argv[3]);

if (!process.argv[2] || !process.argv[3]){
    console.log("Provide correct data format");
}
else {
    console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]}. Em sete anos você terá ${result + 7}`);
}