import infos from "@/app/(models)/Infos"

export async function fetchData(){
try{
    const res = await infos.find();
    return res
}catch(err){
    console.log("Error of fetch");
}
}